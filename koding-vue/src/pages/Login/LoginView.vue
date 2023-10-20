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

      <v-btn class="mx-2 mr-5" href="/signup" >
        Signup
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="120" elevation="0" floating color="amber-lighten-2">
    </v-navigation-drawer>
    <v-main id="main">
      <v-card width="300" height="250">
          <v-card-title class="text-h5">Login</v-card-title>
          <v-card-text>
              <form method="post" @submit.prevent="login">
                  <v-text-field type="text" id="username" v-model="username" required label="Username" name="username" density="compact"></v-text-field>
                  <v-text-field type="password" id="password" v-model="password" required label="Password" name="password" density="compact"></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="amber-lighten-2" variant="tonal">Login</v-btn>
                  </v-card-actions>
              </form>
          </v-card-text>
      </v-card>
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
    username: null,
    password: null,
    csrfToken: null,
  }),

  methods: {
    login() {
      axios.post('/login/', {
        username: this.username,
        password: this.password,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data && response.data.error_message) {
          this.username = null
          this.password = null
          alert(response.data.error_message);
        } else {
          window.location.href = '/';
        }
      })
      .catch(error => {
        console.error(error);
      });
    }
  },
  mounted() {
    this.csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value
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
    justify-content: center;
    align-items: center;
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
