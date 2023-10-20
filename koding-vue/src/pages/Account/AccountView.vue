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
      <v-card width="100%" class="pa-5 my-3">
        <div class="text-h5">Stats</div>
        <v-divider class="my-3"></v-divider>
        <v-row class="pa-3">
          <v-col cols=6>
            <div class="text-body-1 my-2">
              <v-icon color="amber-lighten-2">mdi-compass-outline</v-icon> 
              Created Courses : {{ createdCourses }} 
            </div>
            <div class="text-body-1 my-2">
              <v-icon color="success">mdi-progress-check</v-icon>
              Completed Courses : {{ completedCourses }}
            </div> 
            <div class="text-body-1 my-2">
              <v-icon color="orange">mdi-progress-wrench</v-icon>
              Working Courses : {{ workingCourses }} 
            </div>
            <!--<div class="text-body-1 my-2">
              <v-icon color="lime">mdi-lightbulb-outline</v-icon> 
              Created Tips : {{ createdTips }} 
            </div>-->
            <!--<div class="text-body-1 my-2">
              <v-icon color="blue">mdi-lightbulb-on-outline</v-icon> 
              Learned Tips : {{ learnedTips }} 
            </div>-->
            <div class="text-body-1 my-2">
              <v-icon color="red">mdi-fire</v-icon> 
              Current Streak : {{ currentStreak }} 
            </div>
            <div class="text-body-1 my-2">
              <v-icon color="teal">mdi-fire</v-icon> 
              Longest Streak : {{ longestStreak }} 
            </div>
            <div class="text-body-1 my-2">
              <v-icon color="light-blue">mdi-comment-text-outline</v-icon> 
              Comments: {{ commentsCounter }} 
            </div>
            <div class="text-body-1 my-2">
              <v-icon color="yellow">mdi-star</v-icon> 
              Starred: {{ starredCounter }} 
            </div>
          </v-col>
          <v-col cols="6" class="d-flex justify-center align-center flex-column">
            <v-progress-circular size="150" width="5" v-model="getRankDetails.progress" :color="getRankDetails.color">
              <v-icon size="94">
                mdi-police-badge-outline
              </v-icon>
            </v-progress-circular>
            <span class="mt-4">
              Top {{ percentile}}%
            </span>
          </v-col>
        </v-row>
      </v-card>
      <v-card width="100%" class="pa-5 my-3">
        <div class="text-h5">Your Courses</div>
        <div class="section">
          <v-card v-for="(course, i) in yourCourses" :key="i" class="ma-3"  min-width="150px" variant="tonal" :href="'/course/'+course.id">
            <v-responsive :aspect-ratio="30/21">
              <v-card-title>
                {{ course.title }}
              </v-card-title>
              <v-spacer></v-spacer>
            </v-responsive>
          </v-card>
        </div>
      </v-card>
      <v-card width="100%" class="pa-5 my-3">
        <div class="text-h5">Starred</div>
        <div class="section">
          <v-card v-for="(course, i) in starredCourses" :key="i" class="ma-3"  min-width="150px" variant="tonal" :href="'/course/'+course.id">
            <v-responsive :aspect-ratio="30/21">
              <v-card-title>
                {{ course.title }}
              </v-card-title>
              <v-spacer></v-spacer>
            </v-responsive>
          </v-card>
        </div>
      </v-card>
      <!--<v-card width="100%" class="pa-5 my-3">
        <div class="text-h5">Your Tips</div>
        <div class="section">
          <v-card v-for="(course, i) in yourTips" :key="i" class="ma-3"  min-width="150px" variant="tonal" :href="'/course/'+course.id">
            <v-responsive :aspect-ratio="30/15">
              <v-card-title>
                {{ course.title }}
              </v-card-title>
              <v-spacer></v-spacer>
            </v-responsive>
          </v-card>
        </div>
      </v-card>-->
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

export default {
  name: 'AccountView',
  delimiters: ["[[", "]]"],
  components: {

  },

  data: () => ({
    drawer: false,
    showButton: false,

    workingCourses: 1,
    learnedTips: 10,
    completedCourses: 2,
    longestStreak: 10,
    currentStreak: 12,
    percentile: 4.8,
    createdCourses: 2,
    createdTips: 10,
    starredCounter: 10,
    commentsCounter: 20,

    yourCourses: [
      {
        'title' : 'Course 1', 
        'id' : 1,
      },
      {
        'title' : 'Course 2', 
        'id' : 2,
      },
    ],

    yourTips: [
      {
        title: 'Tip 1',
        id: 1,
      },
      {
        title: 'Tip 2',
        id: 2,
      },
      {
        title: 'Tip 3',
        id: 3,
      },
      {
        title: 'Tip 4',
        id: 4,
      },
      {
        title: 'Tip 5',
        id: 5,
      },
      {
        title: 'Tip 6',
        id: 6,
      },
      {
        title: 'Tip 7',
        id: 7,
      },
      {
        title: 'Tip 8',
        id: 8,
      },
      {
        title: 'Tip 9',
        id: 9,
      },
      {
        title: 'Tip 10',
        id: 10,
      },
    ],

    starredCourses: [
      {
        'title' : 'Starred 1', 
        'id' : 1,
      },
      {
        'title' : 'Starred 2', 
        'id' : 2,
      },
      {
        'title' : 'Starred 3', 
        'id' : 3,
      },
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
    calculateRank() {
      const ranks = [
        { name: 'Iron', threshold: 100 },
        { name: 'Bronze', threshold: 75 },
        { name: 'Silver', threshold: 55 },
        { name: 'Gold', threshold: 35 },
        { name: 'Platinum', threshold: 20 },
        { name: 'Emerald', threshold: 10 },
        { name: 'Ruby', threshold: 5 },
        { name: 'Diamond', threshold: 1 },
        { name: 'Goat', threshold: 0 },
      ];

      let currentRank = null;
      let nextRank = null;

      for (let i = ranks.length-1; i >= 0; i--) {
        if (this.percentile <= ranks[i].threshold) {
          currentRank = ranks[i];
          nextRank = ranks[i + 1];
          break;
        }
      }

      if (!currentRank || !nextRank) {
        return { currentRank: 'Unranked', progress: 0 };
      }

      const progress =
        ((this.percentile - currentRank.threshold) / (nextRank.threshold - currentRank.threshold)) * 100;

      return { currentRank: currentRank.name, progress };
    },
  },
  computed: {
    getRankDetails() {
      let rank = this.calculateRank()
      const rankColors = {
        Diamond: 'light-blue-accent-3',
        Ruby: 'red',
        Emerald: 'green',
        Platinum: 'teal',
        Gold: 'amber-lighten-2',
        Silver: 'blue-grey-lighten-1',
        Bronze: 'brown-darken-1',
        Iron: 'grey-lighten-2',
      };
      return {
        color: rankColors[rank.currentRank] || 'light-blue-accent-3',
        progress: rank.progress
      };
    }
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
    padding: 20px;
    margin-top: 64px;
    margin-bottom: 40px;
    height: calc(100vh - 200px);
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

  .scroll-to-top {
    position: fixed;
    bottom: 60px;
    right: 20px;
    z-index: 1000;
  }
</style>
