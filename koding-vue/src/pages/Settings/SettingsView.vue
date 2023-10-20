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
    <v-main id="main" @scroll="handleScroll">
      <div class="text-h6 d-flex justify-space-between">
        <v-btn variant="text" href="#Profile">Profile</v-btn>
        <v-btn variant="text" href="#Learning">Learning</v-btn>
        <v-btn variant="text" href="#Preferences">Preferences</v-btn>
        <v-btn variant="text" href="#Social">Social</v-btn>
        <v-btn variant="text" href="#Security">Security</v-btn>
        <v-btn variant="text" href="#Deletion">Deletion</v-btn>
      </div>
      <br><v-divider></v-divider><br>
      <v-card width="100%" class="my-3 pa-5" id="Profile">
        <v-card-title class="pb-5">
          <div class="text-h5">
            Profile
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-row class="pl-5">
            <v-col cols="6">
              <div class="d-flex align-center my-2">
                <v-text-field density="compact" variant="outlined" label="Username" v-model="username" hide-details>
                </v-text-field>
                <v-btn icon color="success" variant="tonal" size="x-small" class="ml-2" :disabled="changedValue('username')" @click="saveUsername">
                  <v-icon>
                    mdi-check
                  </v-icon>
                </v-btn>
              </div>
              <div class="d-flex align-center my-2">
                <v-text-field density="compact" variant="outlined" label="Name" v-model="name" hide-details>
                </v-text-field>
                <v-btn icon color="success" variant="tonal" size="x-small" class="ml-2" :disabled="changedValue('name')" @click="saveName">
                  <v-icon>
                    mdi-check
                  </v-icon>
                </v-btn>
              </div>
              <div class="d-flex align-center my-2">
                <v-text-field density="compact" variant="outlined" label="Email" v-model="email" hide-details>
                </v-text-field>
                <v-btn icon color="success" variant="tonal" size="x-small" class="ml-2" :disabled="changedValue('email')" @click="saveEmail">
                  <v-icon>
                    mdi-check
                  </v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="6" class="d-flex align-center justify-center">
              <v-btn id="profile-image" variant="outlined">
                <v-icon size="32">
                  mdi-camera-plus-outline
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card width="100%" class="my-3 pa-5" id="Learning">
        <v-card-title class="pb-5">
          <div class="text-h5">
            Learning
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="pl-5 py-5">
            <div class="text-body-1">
              Skill Level
            </div>
            <v-btn-toggle v-model="skillLevel" rounded="0" @click="saveSkillLevel">
              <v-btn density="compact">
                Begginner
              </v-btn>

              <v-btn density="compact">
                Advanced Begginner
              </v-btn>

              <v-btn density="compact">
                Competent
              </v-btn>

              <v-btn density="compact">
                Proeficient
              </v-btn>

              <v-btn density="compact">
                Master
              </v-btn>
            </v-btn-toggle>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <div class="pl-5 section py-5">
            <v-btn variant="tonal" icon v-for="(skill, i) in skills" :key="i" :color="skill.learning ? 'amber-lighten-2' : 'text' " @click="learnSkill(skill.icon)">
              <v-icon>
                {{ skill.icon }}
              </v-icon>
            </v-btn>
          </div>
         </v-card-text>
      </v-card>
      <v-card width="100%" class="my-3 pa-5" id="Preferences">
        <v-card-title class="pb-5">
          <div class="text-h5">
            Preferences
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <!--<v-card-text>
          <div class="text-body-1 pl-5 py-5">
            Notifications
          </div>
          <v-row>
            <v-spacer></v-spacer>
            <v-checkbox label="Email Notifications" color="amber-lighten-2"></v-checkbox>
            <v-checkbox label="In-App Notifications" color="amber-lighten-2"></v-checkbox>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>-->
        <v-card-text>
          <div class="text-body-1 pl-5 py-5">
            Theme
          </div>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn @click="saveTheme" icon variant="plain">
              <v-icon>
                {{ dark ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-row>
        </v-card-text>
        <br>
      </v-card>
      <v-card width="100%" class="my-3 pa-5" id="Security">
        <v-card-title class="pb-5">
          <div class="text-h5">
            Security
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="text-body-1 pl-5 py-5">
            Change Password
          </div>
          <v-responsive  class="pl-5 pt-2" max-width="450px">
            <v-text-field density="compact" variant="outlined" label="New Password" type="password" v-model="newPassword">
            </v-text-field>
          </v-responsive>
          <v-responsive  class="pl-5 pt-2" max-width="450px">
            <v-text-field density="compact" variant="outlined" label="Confirm New Password" type="password" v-model="newPasswordConfirmation">
            </v-text-field>
          </v-responsive>
          <v-responsive  class="pl-5 pt-2" max-width="450px">
            <v-text-field density="compact" variant="outlined" label="Old Password" type="password" v-model="oldPassword">
            </v-text-field>
          </v-responsive>
           <v-responsive  class="pl-5 pt-2" max-width="450px">
            <v-btn variant="outlined" @click="changePassword">
              Change
            </v-btn>
          </v-responsive>
        </v-card-text>
      </v-card>
      <v-card width="100%" class="my-3 pa-5" id="Social">
        <v-card-title class="pb-5">
          <div class="text-h5">
            Socials
          </div>
        </v-card-title>
        <v-card-text class="d-flex justify-center">
          <v-responsive max-width="450" class="pt-2">
            <div class="d-flex align-center my-2">
              <v-text-field density="compact" variant="outlined" label="Github" v-model="github" hide-details>
              </v-text-field>
              <v-btn icon color="success" variant="tonal" size="x-small" class="ml-2" :disabled="changedValue('github')" @click="saveGithub">
                <v-icon>
                  mdi-check
                </v-icon>
              </v-btn>
            </div>
            <div class="d-flex align-center my-2">
              <v-text-field density="compact" variant="outlined" label="Instagram" v-model="instagram" hide-details>
              </v-text-field>
              <v-btn icon color="success" variant="tonal" size="x-small" class="ml-2" :disabled="changedValue('instagram')" @click="saveInstagram">
                <v-icon>
                  mdi-check
                </v-icon>
              </v-btn>
            </div>
            <div class="d-flex align-center my-2">
              <v-text-field density="compact" variant="outlined" label="Linkedin" v-model="linkedin" hide-details>
              </v-text-field>
              <v-btn icon color="success" variant="tonal" size="x-small" class="ml-2" :disabled="changedValue('linkedin')" @click="saveLinkedin">
                <v-icon>
                  mdi-check
                </v-icon>
              </v-btn>
            </div>
            <div class="d-flex align-center my-2">
              <v-text-field density="compact" variant="outlined" label="Discord" v-model="discord" hide-details>
              </v-text-field>
              <v-btn icon color="success" variant="tonal" size="x-small" class="ml-2" :disabled="changedValue('discord')" @click="saveDiscord">
                <v-icon>
                  mdi-check
                </v-icon>
              </v-btn>
            </div>
          </v-responsive>
        </v-card-text>
      </v-card>
      <v-card width="100%" class="my-3 pa-5" id="Deletion">
        <v-card-title class="pb-5">
          <div class="text-h5">
            Danger Zone
          </div>
        </v-card-title>
        <v-divider></v-divider><br>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" variant="outlined" @click="deleteAccount">
            Delete Account
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" variant="outlined" href="/logout">
            Log Out
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" variant="outlined" @click="resetAccount">
            Reset Account
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <v-btn v-if="showButton" class="scroll-to-top" color="amber-lighten-2" icon @click="scrollToTop">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-main>
    <v-footer app color="amber-lighten-2" class="d-flex justify-center">
      <span>{{ new Date().getFullYear() }} — <strong>Koding</strong></span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SettingsView',
  delimiters: ["[[", "]]"],
  components: {

  },

  data: () => ({
    drawer: false,
    showButton: false,

    username : null,
    name : null,
    email : null,

    skillLevel: 0,
    skillsList: '',
    emailNotifications: false,
    inAppNotifications: false,
    dark: true,

    github : null,
    instagram : null,
    linkedin : null,
    discord : null,

    csrfToken: null,
    originalValues: null,

    oldPassword: null,
    newPasswordConfirmation: null,
    newPassword: null,
  }),

  methods: {
    learnSkill(skill) {
      let list = this.skillsList.split(',')
      if (list.includes(skill)) {
        list = list.filter(i => i!=skill)
      }
      else {
        list.push(skill)
      }
      this.skillsList = list.join(',')
      this.saveSkills()
    },
    scrollToTop() {
      const mainElement = document.getElementById('main');
      mainElement.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      const mainElement = document.getElementById('main');
      this.showButton = mainElement.scrollTop > 100;
    },
    skillLevelFunc(level) {
      let levels = [
        'beginner',
        'advanced_beginner',
        'advanced',
        'proficient',
        'master'
      ]
      for (let i=0; i<5; i++) {
        if (levels[i]==level) {
          return i
        }
      }
    },
    saveUsername() {
      axios.post('/settings/', {
        username: this.username,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.username = this.username
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },
    saveName() {
      axios.post('/settings/', {
        name: this.name,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.name = this.name
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },
    saveEmail() {
      axios.post('/settings/', {
        email: this.email,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.email = this.email
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },
    saveProfileImage() {

    },
    saveSkillLevel() {
      let levels = [
        'beginner',
        'advanced_beginner',
        'advanced',
        'proficient',
        'master'
      ]
      axios.post('/settings/', {
        skillLevel: levels[this.skillLevel],
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.skillLevel = this.skillLevel
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },
    saveSkills() {
      axios.post('/settings/', {
        skills: this.skillsList,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.skillsList = this.skillsList
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },

    /*saveEmailNotifications() {
      axios.post('/settings/', {
        skills: this.skillsList,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.emailNotifications = this.emailNotifications
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },

    saveInAppNotifications() {
      axios.post('/settings/', {
        skills: this.skillsList,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.inAppNotifications = this.inAppNotifications
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },*/

    saveTheme() {
      this.dark = !this.dark

      if (this.dark) {
        this.$vuetify.theme.global.name = 'dark'
      }
      else {
        this.$vuetify.theme.global.name = 'light'
      }

      axios.post('/settings/', {
        dark: this.dark.toString(),
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.theme = this.dark
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },

    changePassword() {
      axios.post('/settings/', {
        newPassword: this.newPassword,
        newPasswordConfirmation: this.newPasswordConfirmation,
        oldPassword: this.oldPassword,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        alert(response.data.message)
        this.newPassword = null
        this.newPasswordConfirmation = null
        this.oldPassword = null
      })
      .catch(error => {
        console.log(error)
      }) 
    },

    saveGithub() {
      axios.post('/settings/', {
        github: this.github,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.github = this.github
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },
    saveInstagram() {
      axios.post('/settings/', {
        instagram: this.instagram,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.instagram = this.instagram
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },
    saveLinkedin() {
      axios.post('/settings/', {
        linkedin: this.linkedin,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.linkedin = this.linkedin
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },
    saveDiscord() {
      axios.post('/settings/', {
        discord: this.discord,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          this.originalValues.discord = this.discord
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },



    resetAccount() {
     axios.post('/settings/', {
        reset: true,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          window.location.reload()
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },
    deleteAccount() {
      axios.post('/settings/', {
        delete: true,
      },
      {
       headers: {
          'X-CSRFToken': this.csrfToken,
        }
      })
      .then(response => {
        if (response.data.success) {
          window.location.href = '/'
        }
      })
      .catch(error => {
        console.log(error)
      }) 
    },


    changedValue(key) {
      if (this.originalValues) {
        return this[key] === this.originalValues[key]
      }
      else {
        return false
      }
    }
  },

  computed : {
    skills() {
      let skills = [
        { icon: 'mdi-language-cpp', learning: false },
        { icon: 'mdi-language-csharp', learning: false },
        { icon: 'mdi-language-css3', learning:  false },
        { icon: 'mdi-language-java', learning:  false },
        { icon: 'mdi-language-html5', learning:  false },
        { icon: 'mdi-language-javascript', learning:  false },
        { icon: 'mdi-language-kotlin', learning:  false },
        { icon: 'mdi-language-php', learning:  false },
        { icon: 'mdi-language-lua', learning:  false },
        { icon: 'mdi-language-markdown', learning:  false },
        { icon: 'mdi-language-python', learning:  false },
        { icon: 'mdi-language-r', learning:  false },
        { icon: 'mdi-language-ruby', learning:  false },
        { icon: 'mdi-language-rust', learning:  false },
        { icon: 'mdi-language-swift', learning:  false },
        { icon: 'mdi-language-typescript', learning:  false },
        { icon: 'mdi-microsoft-visual-studio-code', learning:  false },
        { icon: 'mdi-electron-framework', learning:  false },
        { icon: 'mdi-react', learning:  false },
        { icon: 'mdi-vuejs', learning:  false },
        { icon: 'mdi-webpack', learning:  false },
        { icon: 'mdi-angular', learning:  false }
      ]
      let list = this.skillsList.split(',')
      for (let i=0; i<skills.length; i++) {
        if (list.includes(skills[i].icon)) {
          skills[i].learning = true
        }
        else {
          skills[i].learning = false
        }
      }
      return skills
    },
  },

  mounted() {
    this.csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value
    this.$vuetify.theme.defaultTheme = 'light'

  },
  created() {
    axios.get('/settings',
        {
           params: {
              type: 'initialization'
            }
        }
      )
      .then(response => {
        const data = response.data.profile;

        this.username = data.user.username
        this.name = data.user.name
        this.email = data.user.email
        this.skillLevel = this.skillLevelFunc(data.skill_level)
        this.skillsList = data.skills
        this.emailNotifications = data.email_notifications
        this.inAppNotifications = data.in_app_notifications
        this.dark = data.theme
        this.github = data.github
        this.instagram = data.instagram
        this.linkedin = data.linkedin
        this.discord = data.discord

        this.originalValues = {
          username: data.user.username,
          name: data.user.name,
          email: data.user.email,
          skillLevel: this.skillLevelFunc(data.skill_level),
          skillsList: data.skills,
          emailNotifications: data.email_notifications,
          inAppNotifications: data.in_app_notifications,
          dark: data.theme,
          github: data.github,
          instagram: data.instagram,
          linkedin: data.linkedin,
          discord: data.discord,
        };

        if (this.originalValues.dark) {
          this.$vuetify.theme.global.name = "dark"
        }
        else {
          this.$vuetify.theme.global.name = "light"
        }

      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
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
    gap: 20px;
    padding: 20px;
    margin-top: 64px;
    margin-bottom: 40px;
    height: calc(100vh - 200px);
    overflow: scroll;
    scroll-behavior: smooth;
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


  #profile-image {
    height: 180px;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  * {
    scroll-margin-top: 60px !important;
  }

  .section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;

  }

  .scroll-to-top {
    position: fixed;
    bottom: 60px;
    right: 20px;
    z-index: 1000;
  }

</style>
