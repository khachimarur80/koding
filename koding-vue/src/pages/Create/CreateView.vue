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
      <v-card width="100%" class="pa-5 overflow-auto scrollbar">
        <div class="text-h4">
          Your Courses 
          <v-btn icon>
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </div><br>
        <div class="section">
          <v-card v-for="(course, i) in courses" :key="i" class="ma-3"  min-width="250px" variant="tonal" :href="'/course/'+course.id">
            <v-responsive :aspect-ratio="30/21">
              <v-card-title>
                {{ course.title }}
              </v-card-title>
              <v-spacer></v-spacer>
            </v-responsive>
          </v-card>
        </div>
      </v-card>
    </v-main>
    <v-footer app color="amber-lighten-2" class="d-flex justify-center">
      <span>{{ new Date().getFullYear() }} — <strong>Koding</strong></span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'CreateView',
  delimiters: ["[[", "]]"],
  components: {

  },

  data: () => ({
    drawer: false,
    courses: [
      {
        'title' : 'C++ for Beginners', 
        'id' : 1,
      },
      {
        'title' : 'How to use VS Code', 
        'id' : 2,
      },
    ],
  }),
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
