<template>
  <v-app>
    <v-app-bar flat color="amber">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-app-bar-title>
        Koding
      </v-app-bar-title>

      <!--<v-btn icon density="compact" class="mx-2" href="/create-tip">
        <v-icon>
          mdi-lightbulb-outline
        </v-icon>
      </v-btn>-->
      <v-btn icon density="compact" class="mx-2" href="/create">
        <v-icon>
          mdi-cast-education
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
      <v-btn icon density="compact" class="mx-2" href="/">
        <v-icon>
          mdi-home-outline
        </v-icon>
      </v-btn>
      <v-btn icon density="compact" class="mx-2 mr-5" href="/settings">
        <v-icon>
          mdi-cog-outline
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="120" elevation="0" floating color="amber">
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
              <v-text-field density="compact" variant="outlined" label="Username">
              </v-text-field>
              <v-text-field density="compact" variant="outlined" label="Name">
              </v-text-field>
              <v-text-field density="compact" variant="outlined" label="Email">
              </v-text-field>
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
            <v-btn-toggle v-model="skillLevel" rounded="0">
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
            <v-btn variant="tonal" icon v-for="(skill, i) in skills" :key="i" :color="skill.learning ? 'amber' : 'text' " @click="skill.learning=!skill.learning">
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
        <v-card-text>
          <div class="text-body-1 pl-5 py-5">
            Notifications
          </div>
          <v-row>
            <v-spacer></v-spacer>
            <v-checkbox label="Email Notifications" color="amber"></v-checkbox>
            <v-checkbox label="In-App Notifications" color="amber"></v-checkbox>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <div class="text-body-1 pl-5 py-5">
            Theme
          </div>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn @click="dark=!dark" icon variant="plain">
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
            <v-text-field density="compact" variant="outlined" label="New Password" type="password">
            </v-text-field>
          </v-responsive>
          <v-responsive  class="pl-5 pt-2" max-width="450px">
            <v-text-field density="compact" variant="outlined" label="Confirm New Password" type="password">
            </v-text-field>
          </v-responsive>
          <v-responsive  class="pl-5 pt-2" max-width="450px">
            <v-text-field density="compact" variant="outlined" label="Old Password" type="password">
            </v-text-field>
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
            <v-text-field density="compact" variant="outlined" label="Github">
            </v-text-field>
            <v-text-field density="compact" variant="outlined" label="Instagram">
            </v-text-field>
            <v-text-field density="compact" variant="outlined" label="Linkedin">
            </v-text-field>
            <v-text-field density="compact" variant="outlined" label="Discord">
            </v-text-field>
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
          <v-btn color="error" variant="outlined">
            Delete Account
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" variant="outlined">
            Reset Account
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <v-btn v-if="showButton" class="scroll-to-top" color="amber" icon @click="scrollToTop">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-main>
    <v-footer app color="amber" class="d-flex justify-center">
      <span>{{ new Date().getFullYear() }} — <strong>Koding</strong></span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'SettingsView',
  delimiters: ["[[", "]]"],
  components: {

  },

  data: () => ({
    drawer: false,
    dark: true,
    skillLevel: 2,
    showButton: false,
    skills: [
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
      { icon: 'mdi-language-php', learning:  false },
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
    ],
  }),

  methods: {
    scrollToTop() {
      const mainElement = document.getElementById('main');
      mainElement.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      const mainElement = document.getElementById('main');
      this.showButton = mainElement.scrollTop > 100;
    },
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
