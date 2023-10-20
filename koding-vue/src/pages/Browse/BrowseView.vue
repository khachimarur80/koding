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
      <v-btn icon density="compact" class="mx-2" href="/inbox">
        <v-icon>
          mdi-inbox
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
      <div id="content" class="scrollbar">
        <v-card min-height="100%" min-width="100%">
          <v-card-title>
            <did class="section">
              <v-card v-for="(course, i) in courses" :key="i" class="ma-3"  min-width="200px" variant="tonal" :href="'/course/'+course.id">
                <v-responsive :aspect-ratio="30/21">
                  <v-card-title>
                    {{ course.title }}
                  </v-card-title>
                </v-responsive>
              </v-card>
            </did>
          </v-card-title>
        </v-card>
      </div>
    </v-main>
    <v-footer app color="amber-lighten-2" class="d-flex justify-center">
      <span>{{ new Date().getFullYear() }} — <strong>Koding</strong></span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BrowseView',
  delimiters: ["[[", "]]"],
  components: {

  },

  data: () => ({
    drawer: false,
    courses: [],
  }),

  created() {
    axios.get('/browse/',
        {
           params: {
              type: 'initialization'
            }
        }
      )
      .then(response => {
        const data = response.data;
        this.courses = data.courses;
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  },
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
  #content {
    flex: 1;
    height: 100%;
    overflow: scroll;
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

  .section {
    display: flex;
    flex-wrap: wrap;
  }

  .notification {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
