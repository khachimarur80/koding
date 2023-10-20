<template>
  <v-app>
    <v-app-bar flat color="amber-lighten-2">
      <v-app-bar-nav-icon href="/">
        <v-icon>
          mdi-home
        </v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>
        Koding
      </v-app-bar-title>

      <v-btn icon density="compact" class="mx-2"  href="/browse">
        <v-icon>
          mdi-compass-outline
        </v-icon>
      </v-btn>
      <v-btn icon density="compact" class="mx-2" href="/discussions">
        <v-icon>
          mdi-forum-outline
        </v-icon>
      </v-btn>
      <v-btn icon density="compact" class="mx-2" href="/account">
        <v-icon>
          mdi-account
        </v-icon>
      </v-btn>
     
      <v-btn icon density="compact" class="mx-2 mr-5" href="/settings">
        <v-icon>
          mdi-cog-outline
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="120" elevation="0" floating color="amber-lighten-2">
    </v-navigation-drawer>
    <v-main id="main">
      <v-card width="100%" class="pa-5 overflow-auto scrollbar" >
        <v-card-title class="text-center">
          <div class="text-h4 pb-3">
            {{ chapter }}
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <Markdown :source="contents" class="markdown"></Markdown>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-row>
            <v-col cols="4" class="d-flex justify-center">
              <v-btn v-if="chapterNum!=0">
                Previous
              </v-btn>
            </v-col>
            <v-col cols="4" class="d-flex justify-center">
              <v-btn v-if="!completed" color="amber" @click="complete">
                Complete
              </v-btn>
              <v-btn disabled color="success" v-else>
                Completed
              </v-btn>
            </v-col>
            <v-col cols="4" class="d-flex justify-center">
              <v-btn v-if="!final">
                Next
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-main>
    <v-footer app color="amber-lighten-2" class="d-flex justify-center">
      <span>{{ new Date().getFullYear() }} — <strong>Koding</strong></span>
    </v-footer>
  </v-app>
</template>

<script>
import Markdown from 'vue3-markdown-it';
//import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import axios from 'axios'


export default {
  name: 'ChapterView',
  delimiters: ["[[", "]]"],
  components: {
    Markdown
  },

  data: () => ({
    courseId: window.location.href.match(/course\/(\d+)/)?.[1],
    chapterNum: 0,
    drawer: false,
    chapter: '',
    completed: false,
    contents: '',
    final: false,
    csrfToken: null,
  }),
  methods: {
    complete() {
      this.completed = !this.completed

      axios.post(window.location.href.replace(window.location.origin, ''),
        {
           completed: this.completed.toString(),
        },
        {
        headers: {
            'X-CSRFToken': this.csrfToken,
          }
        }
      )
      .then (response => {
        if (response.data.success && this.final) {
          window.location.href = '/course/'+this.courseId
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
    }
  },
  created() {
     axios.get(window.location.href.replace(window.location.origin, ''),
        {
         params: {
            type: 'initialization'
          }
        }
      )
      .then(response => {
        const data = response.data;
        this.completed = data.completed;
        this.chapter = data.chapter;
        this.contents = data.contents;
        this.final = data.final;
        this.chapterNum = data.chapterNum;
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  },
  directives: {
    highlight: {
      inserted(el) {
        const blocks = el.querySelectorAll('pre');
        blocks.forEach((block) => {
          console.log(block)
          //hljs.highlightElement(block);
        });
      },
    },
  },
  mounted() {
    this.csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value
  }
}
</script>

<style>
  body, html {
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  #main {
    display: flex;
    gap: 20px;
    padding: 20px;
    margin-top: 64px;
    margin-bottom: 40px;
    height: calc(100vh - 200px);
    overflow: hidden;
  }
  .scrollbar::-webkit-scrollbar {
    width: 3px;
  }
  .scrollbar::-webkit-scrollbar-track {
    background: #1E1E1E;
  }
  .scrollbar::-webkit-scrollbar-thumb {
    background: #888;
  }
  .scrollbar::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .markdown {
    line-height: 1.6;
    padding: 16px;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 5px;
    user-select: none;
  }

  .markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6 {
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  .markdown li {
    list-style: disc;
    margin-left: 32px;
  }

  .markdown code {
    font-family: 'Courier New', monospace;
    background-color: #333;
    padding: 2px 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .markdown pre code{
    font-family: 'Menlo', monospace;
    padding: 2px 4px;
    border: none;
    background: none;
  }
  .markdown pre {
    font-family: 'Menlo', monospace;
    background-color: #fff;
    padding: 16px;
    border-radius: 4px;
    overflow: auto;
    margin: 16px 0;
    white-space: pre-wrap;
    filter: invert(100%);
  }

  .markdown table {
    border-collapse: collapse;
    width: 100%;
  }

  .markdown th, .markdown td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  .markdown th {
    background-color: #333;
    font-weight: bold;
  }

</style>
