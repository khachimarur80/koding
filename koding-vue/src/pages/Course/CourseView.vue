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

      <!--<v-btn icon density="compact" class="mx-2" href="/create-tip">
        <v-icon>
          mdi-lightbulb-outline
        </v-icon>
      </v-btn>-->
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
          <div class="text-h4">
            {{ title }}
          </div>
          <div class="text-caption">
            Created on {{created}}
          </div>
          <div class="d-flex justify-center align-center py-3">
            <v-row>
              <v-col cols="2">
              </v-col>
              <v-col cols="8">
                <span class="text-subtitle-1 mr-4 ml-1">{{ stars }}</span>
                <v-btn icon density="compact" :href="'/discussions/?course='+courseId">
                  <v-icon color="blue" size="small">
                    mdi-comment-text-outline
                  </v-icon>
                </v-btn>
                <span class="text-subtitle-1 mr-4 ml-1">{{ comments }}</span>
                <v-btn icon density="compact" @click="like">
                  <v-icon color="red" size="small" v-if="liked">
                    mdi-heart
                  </v-icon>
                  <v-icon color="red" size="small" v-else>
                    mdi-heart-outline
                  </v-icon>
                </v-btn>
                <span class="text-subtitle-1 mr-4 ml-1">{{ likes }}</span>
                <v-btn icon density="compact" @click="dislike">
                  <v-icon color="brown" size="small" v-if="disliked">
                    mdi-heart-broken
                  </v-icon>
                  <v-icon color="brown" size="small" v-else>
                    mdi-heart-broken-outline
                  </v-icon>
                </v-btn>
                <span class="text-subtitle-1 mr-4 ml-1">{{ dislikes }}</span>
              </v-col>
              <v-col cols="2">
                <v-btn variant="outlined" color="success" v-if="!enrolled" @click="enroll">
                  Enroll
                </v-btn>
                <v-btn variant="outlined" color="error" v-else @click="enroll">
                  Disenroll
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="text-h5 my-3">
            Progress
          </div>
          <v-progress-linear v-model="completion" height="20">
          </v-progress-linear>
          <br>
          <div class="text-h5 my-3">
            What is this About
          </div>
          <div class="text-body-1">
            {{ introduction }}
          </div><br>
          <div class="text-h5 my-3">
            Table of contents
          </div>
          <div class="text-body-1" v-for="(chapter, i) in index" :key="i">
            <a :key="i" :href="'/course/'+courseId+'/chapter-'+i">{{ chapter }}</a>
          </div>
        </v-card-text>

      </v-card>
    </v-main>
    <v-footer app color="amber-lighten-2" class="d-flex justify-center">
      <span>{{ new Date().getFullYear() }} — <strong>Koding</strong></span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CourseView',
  delimiters: ["[[", "]]"],
  components: {

  },

  data: () => ({
    courseId: window.location.href.match(/course\/(\d+)/)?.[1],
    drawer: false,
    title: null,
    created: null,
    comments: null,
    likes: null,
    dislikes: null,
    liked: null,
    disliked: null,
    completion: null,

    introduction: "",
    index: [],

    enrolled: false,

    csrfToken: null,
  }),

  methods: {
    enroll() {
      this.enrolled = !this.enrolled

      axios.post(window.location.href.replace(window.location.origin, ''),
        {
           enrolled: this.enrolled.toString(),
        },
        {
        headers: {
            'X-CSRFToken': this.csrfToken,
          }
        }
      )
      .catch(error => {
        console.error('An error occurred:', error);
      });
    },
    like() {
      this.liked = !this.liked
      axios.post(window.location.href.replace(window.location.origin, ''),
        {
           like: this.liked.toString(),
        },
        {
        headers: {
            'X-CSRFToken': this.csrfToken,
          }
        }
      )
      .then(response => {
        this.likes = response.data.likes
        this.dislikes = response.data.dislikes
        if (this.liked) {
          this.disliked = false
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
    },
    dislike() {
      this.disliked = !this.disliked
      axios.post(window.location.href.replace(window.location.origin, ''),
        {
           dislike: this.disliked.toString(),
        },
        {
        headers: {
            'X-CSRFToken': this.csrfToken,
          }
        }
      )
      .then(response => {
        this.dislikes = response.data.dislikes
        this.likes = response.data.likes
        if (this.disliked) {
          this.liked = false
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
        this.title = data.title;
        this.created = data.created;
        this.comments = data.comments;
        this.likes = data.likes;
        this.dislikes = data.dislikes
        this.liked = data.liked
        this.disliked = data.disliked
        this.introduction = data.introduction
        this.index = data.index
        this.enrolled = data.enrolled
        this.completion = data.completion
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
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
</style>
