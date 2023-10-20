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

      <div>
        <v-btn class="mx-2 mr-5" href="/login" >
          Login
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="120" elevation="0" floating color="amber-lighten-2">
    </v-navigation-drawer>
    <v-main id="main">
      <v-card width="300" height="320">
        <v-card-title class="text-h5">Sign Up</v-card-title>
        <v-card-text>
          <form method="post">
            <v-text-field
              label="Username"
              outlined
              required
              v-model="username"
              density="compact"
            >
            </v-text-field>

            <v-text-field
              label="Password"
              type="password"
              outlined
              required
              v-model="password"
              density="compact"
            >
            </v-text-field>

            <v-text-field
              label="Confirm Password"
              type="password"
              outlined
              required
              v-model="confirmation"
              density="compact"
            >
            </v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" @click="signup" color="amber-lighten-2" variant="tonal">Sign Up</v-btn>
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
  name: 'SignupView', 
  delimiters: ["[[", "]]"],
  data: () => ({
    username: null,
    password: null,
    confirmation: null,
    csrfToken: null,
  }),
  methods: {
    signup(event) {
      event.preventDefault()
      axios.post('/signup/', {
        username: this.username,
        password1: this.password,
        password2: this.confirmation,
      }, 
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          window.location.href = '/';
        }
        else {
          this.username = null
          this.password = null
          this.confirmation = null
          alert(response.data.errors)
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
</style>
