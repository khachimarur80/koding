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
      <div v-if="authenticated">
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
        <v-btn icon density="compact" class="mx-2 mr-5" href="/settings" >
          <v-icon>
            mdi-cog-outline
          </v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn class="mx-2" href="/login" >
          Login
        </v-btn>
        <v-btn class="mx-2 mr-5" href="/signup" >
          Signup
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="120" elevation="0" floating color="amber-lighten-2">
    </v-navigation-drawer>
    <v-main id="main" v-if="authenticated">
      <div id="filters">
        <v-card height="30%" width="100%" flat>
          <v-card-title>
            <div class="text-body-1">
              Inbox
            </div>
          </v-card-title>
          <v-divider>
          </v-divider>
          <v-card-text style="height: calc(100% - 45px);" class="overflow-auto scrollbar">
              <div class="text-body-2 notification" v-for="(notification, i) in notifications" :key="i">
                {{ notification }}
              </div>
          </v-card-text>
        </v-card>
        <v-card height="70%" width="100%" flat>
          <v-card-title>
            <div class="text-body-1">
              Recent Activity
            </div>
          </v-card-title>
          <v-divider>
          </v-divider>
          <v-card-text style="height: calc(100% - 45px);" class="overflow-auto scrollbar">
              <div class="text-body-2 notification" v-for="(activity, i) in activities" :key="i">
                {{ activity }}
              </div>
          </v-card-text>
        </v-card>
      </div>
      <div id="content" class="scrollbar">
        <v-card min-height="100%" min-width="100%">
          <v-card-title>
            <div class="text-h5">
              Courses
            </div>
            <div class="section">
              <v-card v-for="(course, i) in courses" :key="i" class="ma-3"  min-width="150px" variant="tonal" :href="'/course/'+course.id">
                <v-responsive :aspect-ratio="30/21">
                  <v-card-title>
                    {{ course.title }}
                  </v-card-title>
                  <v-spacer></v-spacer>
                </v-responsive>
              </v-card>
            </div>
            <!--<div class="text-h5">
              Tips
            </div>
            <div class="section">
              <v-card v-for="(tip, i) in tips" :key="i" class="ma-3" min-width="150px"  variant="tonal">
                <v-responsive :aspect-ratio="30/15">
                  <v-card-title>
                    {{ tip }}
                  </v-card-title>
                </v-responsive>
              </v-card>
            </div>-->
            <div class="text-h5">
              Discussions
            </div>
            <div>
              <v-list v-for="(discussion, i) in discussions" :key="i">
                <v-list-item @click="viewDiscussion(discussion.id)">
                  <div class="text-body-1">
                    {{ discussion.title }}
                  </div>
                  <div class="text-body-2">
                    {{ discussion.preview }}
                  </div>
                </v-list-item>
              </v-list>
            </div>
            <!--<div class="text-h5">
              Work
            </div>
            <div>
              <v-list v-for="(task, i) in tasks" :key="i">
                <v-list-item>
                    <div class="text-body-1">
                      {{ task }}
                    </div>
                </v-list-item>
              </v-list>
            </div>-->
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

import axios from 'axios';

export default {
  name: 'HomeView',
  delimiters: ["[[", "]]"],
  components: {

  },

  data: () => ({
    drawer: false,
    courses: [],
    discussions: [],
    notifications: [],
    activities: [],
    authenticated: false,
  }),

  methods: {
    viewDiscussion(id) {
      window.location.href = `/discussions?id=${id}`;
    }
  },

  mounted() {
    axios.get(window.location.href.replace(window.location.origin, ''),
        {
         params: {
            type: 'initialization'
          }
        }
      )
      .then(response => {
        const data = response.data;
        this.courses = data.courses;
        this.discussions = data.discussions;
        this.notifications = data.notifications;
        this.authenticated = data.authenticated;
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
  #filters {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    overflow: scroll;
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
