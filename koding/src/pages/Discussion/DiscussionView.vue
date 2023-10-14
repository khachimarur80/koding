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
    <v-main id="main" class="scrollbar">
      <div class="scrollbar-x d-flex overflow-auto" @wheel="scrollHorizontal" id="discussions-list">
        <v-btn v-for="(course, i) in courses" :key="i" rounded="0" flat :active="discussionId==course.id" @click="openDiscussion(course)" :color="discussionId==course.id ? 'amber' : ''" variant="tonal">
          <span style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;">{{ course.title }}</span>
        </v-btn>
      </div>
      <v-card width="100%" class="pa-5 my-3" v-if="discussion" flat>
        <v-card-title>
          <div class="text-h5 text-center pb-3">
            {{ discussion.title }}
          </div>
        </v-card-title>
        <v-card-text>
          <div class="message-container scrollable">
            <template v-for="(day, index) in messageDays" :key="index">
              <div class="d-flex align-center" style="width:100%">
                <v-divider></v-divider>
                <span class="mx-3">{{ day.date }}</span>
                <v-divider></v-divider>
              </div>
              <div
                :class="message.author === user ? 'user-speech-bubble' : 'other-speech-bubble'"
                v-for="(message, messageIndex) in day.messages"
                :key="messageIndex"
              >
                <span>{{ message.contents }}</span><br>
                <span class="text-caption" style="position: absolute; bottom: 0px; right: 10px;">
                  {{ message.author }} at {{ message.time }}
                </span>
              </div>
            </template>
            <div class="pl-7 py-5">
              <div class="dot-pulse"></div>
            </div>
          </div>
          <v-textarea 
            hide-details 
            density="compact" 
            label="Send message ..."
            :rows="1"
            auto-grow
            no-resize
            >
            <template v-slot:append>
              <v-btn icon flat color="amber">
                <v-icon>
                  mdi-send
                </v-icon>
              </v-btn>
            </template>
          </v-textarea>
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
  name: 'DiscussionView',
  delimiters: ["[[", "]]"],
  components: {

  },

  data: () => ({
    courseId: window.location.href.match(/course\/(\d+)/)?.[1],
    drawer: false,
    discussion: null,
    discussionId: null,
    user: 'Kei',
    courses: [
      {
        'title' : 'C++ for Beginners', 
        'id' : 1,
      },
      {
        'title' : 'How to use VS Code', 
        'id' : 2,
      },
       {
        'title' : 'Javascript for Beginners', 
        'id' : 3,
      },
      {
        'title' : 'How to use VIM', 
        'id' : 4,
      },
       {
        'title' : 'Rust for Beginners', 
        'id' : 5,
      },
      {
        'title' : 'Python for Beginners', 
        'id' : 6,
      },
    ],
    messages: [
      {
        'author' : 'Kei',
        'category' : 'Author',
        'date' : '14/10/2023',
        'time': '20:45',
        'contents': 'Thank you guys for the support!'
      },
      {
        'author' : 'Tai',
        'category' : 'User',
        'date' : '12/10/2023',
        'time': '9:14',
        'contents': 'There\'s a typo on chapter 3 :v'
      },
      {
        'author' : 'Yan',
        'category' : 'User',
        'date' : '11/10/2023',
        'time': '13:42',
        'contents': 'Awesome job!'
      },
      {
        'author' : 'Tai',
        'category' : 'User',
        'date' : '15/10/2023',
        'time': '08:30',
        'contents': 'I found a bug in the code example of chapter 5.'
      },
      {
        'author' : 'Tai',
        'category' : 'User',
        'date' : '15/10/2023',
        'time': '09:15',
        'contents': 'I\'ll take a look at the bug in chapter 5 and get it fixed.'
      },
      {
        'author' : 'Yan',
        'category' : 'User',
        'date' : '15/10/2023',
        'time': '09:30',
        'contents': 'Great, thanks for the quick response!'
      },
      {
        'author' : 'Tai',
        'category' : 'User',
        'date' : '15/10/2023',
        'time': '12:20',
        'contents': 'I have a question about the exercise in chapter 7.'
      },
      {
        'author' : 'Kei',
        'category' : 'Author',
        'date' : '15/10/2023',
        'time': '14:05',
        'contents': 'Sure, what\'s your question about the exercise in chapter 7?'
      },
      {
        'author' : 'Tai',
        'category' : 'User',
        'date' : '16/10/2023',
        'time': '10:55',
        'contents': 'I finished chapter 6, and it was very informative.'
      },
      {
        'author' : 'Kei',
        'category' : 'Author',
        'date' : '16/10/2023',
        'time': '11:30',
        'contents': 'That\'s great to hear, Tai! Chapter 7 has even more interesting topics.'
      },
    ]

  }),
  methods: {
    scrollHorizontal(event) {
      const scrollAmount = event.deltaY * 3;

      document.getElementById('discussions-list').scrollLeft += scrollAmount;

      event.preventDefault();
    },
    openDiscussion(discussion) {
      if (discussion!=this.discussion) {
        this.discussionId = discussion.id
        this.discussion = discussion
      }
      else {
        this.discussionId = null
        this.discussion = null
      }
    },
    formatDate(dateString) {
      const [day, month, year] = dateString.replace(/\//g, '-').split('-').map((part) => parseInt(part, 10));
      return new Date(year, month - 1, day); // Month is 0-based, so we subtract 1
    },

  },
  computed: {
    messageDays() {
      const groupedMessages = {};
      this.messages.forEach((message) => {
        const messageDate = message.date;
        if (!groupedMessages[messageDate]) {
          groupedMessages[messageDate] = [];
        }
        groupedMessages[messageDate].push(message);
      });

      let messageDays = Object.keys(groupedMessages).map((date) => ({
        date,
        messages: groupedMessages[date],
      }));
      console.log(messageDays[0].date)
      messageDays = messageDays.sort((a, b) => {
        const dateA = this.formatDate(a.date);
        const dateB = this.formatDate(b.date);
        console.log(dateA)
        return dateA - dateB;
      })


      console.log(messageDays[0].date)
      return messageDays;
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

  .scrollbar-x::-webkit-scrollbar {
    height: 3px;
  }
  .scrollbar-x::-webkit-scrollbar-track {
    background: #1E1E1E;
  }
  .scrollbar-x::-webkit-scrollbar-thumb {
    background: #888;
  }
  .scrollbar-x::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .message-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .user-speech-bubble {
    background-color: #FFB931;
    color: black;
    padding: 10px;
    border-radius: 15px;
    margin: 5px;
    max-width: 70%;
    word-wrap: break-word;
    position: relative;
    align-self: flex-end;
    padding-bottom: 25px;
    min-width: 150px;
  }

  .user-speech-bubble::after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-width: 25px 25px 0 0;
    border-color: #FFB931 transparent transparent transparent;
    top: 15%;
    right: -15px;
  }

  .other-speech-bubble {
    background-color: #ddd;
    color: #333;
    padding: 10px;
    border-radius: 15px;
    margin: 5px;
    max-width: 70%;
    word-wrap: break-word;
    position: relative;
    padding-bottom: 25px;
    min-width: 150px;
  }

  .other-speech-bubble::after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-width:  0 25px 25px 0;
    border-color: transparent #ddd transparent transparent;
    left: -15px;
    top: 15%;
    margin-top: 0px;
  }

  .dot-pulse {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ddd;
    color: #ddd;
    box-shadow: 9999px 0 0 -3px;
    animation: dot-pulse 1.5s infinite linear;
    animation-delay: 0.25s;
  }
  .dot-pulse::before, .dot-pulse::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ddd;
    color: #ddd;
  }
  .dot-pulse::before {
    box-shadow: 9984px 0 0 -3px;
    animation: dot-pulse-before 1.5s infinite linear;
    animation-delay: 0s;
  }
  .dot-pulse::after {
    box-shadow: 10014px 0 0 -3px;
    animation: dot-pulse-after 1.5s infinite linear;
    animation-delay: 0.5s;
  }

  @keyframes dot-pulse-before {
    0% {
      box-shadow: 9984px 0 0 -3px;
    }
    30% {
      box-shadow: 9984px 0 0 1px;
    }
    60%, 100% {
      box-shadow: 9984px 0 0 -3px;
    }
  }
  @keyframes dot-pulse {
    0% {
      box-shadow: 9999px 0 0 -3px;
    }
    30% {
      box-shadow: 9999px 0 0 1px;
    }
    60%, 100% {
      box-shadow: 9999px 0 0 -3px;
    }
  }
  @keyframes dot-pulse-after {
    0% {
      box-shadow: 10014px 0 0 -3px;
    }
    30% {
      box-shadow: 10014px 0 0 1px;
    }
    60%, 100% {
      box-shadow: 10014px 0 0 -3px;
    }
  }
</style>
