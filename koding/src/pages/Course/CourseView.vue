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
    <v-main id="main">
      <v-card width="100%" class="pa-5 overflow-auto scrollbar" >
        <v-card-title class="text-center">
          <div class="text-h4">
            {{ title }}
          </div>
          <div class="text-caption">
            By {{author}} on {{created}}
          </div>
          <div class="d-flex justify-center align-center py-3">
            <v-btn icon density="compact" @click="starred=!starred">
              <v-icon color="yellow" size="small" v-if="starred">
                mdi-star
              </v-icon>
              <v-icon color="yellow" size="small" v-else>
                mdi-star-outline
              </v-icon>
            </v-btn>
            <span class="text-subtitle-1 mr-4 ml-1">{{ stars }}</span>
            <v-btn icon density="compact">
              <v-icon color="blue" size="small">
                mdi-comment-text-outline
              </v-icon>
            </v-btn>
            <span class="text-subtitle-1 mr-4 ml-1">{{ comments }}</span>
            <v-btn icon density="compact" @click="liked=!liked">
              <v-icon color="red" size="small" v-if="liked">
                mdi-heart
              </v-icon>
              <v-icon color="red" size="small" v-else>
                mdi-heart-outline
              </v-icon>
            </v-btn>
            <span class="text-subtitle-1 mr-4 ml-1">{{ likes }}</span>
            <v-btn icon density="compact" @click="disliked=!disliked">
              <v-icon color="brown" size="small" v-if="disliked">
                mdi-heart-broken
              </v-icon>
              <v-icon color="brown" size="small" v-else>
                mdi-heart-broken-outline
              </v-icon>
            </v-btn>
            <span class="text-subtitle-1 mr-4 ml-1">{{ dislikes }}</span>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="text-h5 my-3">
            Progress
          </div>
          <v-progress-linear v-model="completion" height="20">
            <template v-slot:default="{ value }">
              <strong>{{ value }}%</strong>
            </template>
          </v-progress-linear>
          <br>
          <div class="text-h5 my-3">
            What is this About
          </div>
          <div class="text-body-1">
            {{ introduction }}
          </div><br>
          <div class="text-h5 my-3">
            Table of contents {{ courseId }}
          </div>
          <div class="text-body-1" v-for="(chapter, i) in index" :key="i">
            <a :key="i" :href="courseId+'/chapter-'+i">{{ chapter }}</a>
          </div>
        </v-card-text>

      </v-card>
    </v-main>
    <v-footer app color="amber" class="d-flex justify-center">
      <span>{{ new Date().getFullYear() }} — <strong>Koding</strong></span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'CourseView',
  delimiters: ["[[", "]]"],
  components: {

  },

  data: () => ({
    courseId: window.location.href.match(/course\/(\d+)/)?.[1],
    drawer: false,
    title: 'C++ for Beginners',
    author: 'Kei Rodríguez Hachimaru',
    created: '14/10/2023',
    stars: 10,
    comments: 40,
    likes: 20,
    dislikes: 3,
    liked: false,
    starred: false,
    disliked: false,
    completion: 34,

    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada est vel ipsum elementum, vel ornare metus aliquam. Integer at nisl ac justo eleifend hendrerit. Sed ac urna eu purus facilisis hendrerit. Suspendisse eget semper erat, eget fermentum justo. Vestibulum vel metus id eros tristique bibendum",
    index: [
      "Introduction to C++",
      "Setting Up Your Development Environment",
      "Your First C++ Program",
      "Variables and Data Types",
      "Basic Input and Output",
      "Conditional Statements",
      "Loops and Iteration",
      "Arrays and Vectors",
      "Functions and Methods",
      "Object-Oriented Programming Concepts",
      "Classes and Objects",
      "Inheritance and Polymorphism",
      "Exception Handling",
      "File Input and Output",
      "Templates and Standard Library",
      "C++ Best Practices",
      "Final Project and Conclusion",
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
