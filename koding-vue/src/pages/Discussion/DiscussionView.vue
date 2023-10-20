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
    <v-main id="main" class="scrollbar">
      <div class="scrollbar-x d-flex overflow-auto" @wheel="scrollHorizontal" id="discussions-list">
        <v-btn v-for="(discussion, i) in discussions" :key="i" rounded="0" flat :active="discussionId==discussion.id" @click="openDiscussion(discussion)" :color="discussionId==discussion.id ? 'amber-lighten-2' : ''" variant="tonal">
          <span style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;">{{ discussion.title }}</span>
        </v-btn>
      </div>
      <div id="chat" class="ma-3">
        <v-card width="100%" height="100%" class="pa-5 my-3 overflow-auto" v-if="discussion" flat id="chat-card">
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
                  {{ message.author }} at {{ extractHourMinute(message.time) }}
                </span>
              </div>
            </template>
          </div>
        </v-card-text>
        </v-card>
      </div>
      <div id="message-box" class="ma-3">
        <v-textarea 
          hide-details 
          density="compact" 
          label="Send message ..."
          :rows="1"
          auto-grow
          no-resize
          v-model="message"
          v-if="discussion"
          >
          <template v-slot:append>
            <v-btn icon flat color="amber-lighten-2" @click="sendMessage">
              <v-icon>
                mdi-send
              </v-icon>
            </v-btn>
          </template>
        </v-textarea>
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
  name: 'DiscussionView',
  delimiters: ["[[", "]]"],
  components: {

  },

  data: () => ({
    drawer: false,
    discussion: null,
    discussionId: null,
    user: null,
    discussions: [],
    messages: [],
    socket: null,
    message: '',
    csrfToken: null,
  }),
  methods: {
    scrollHorizontal(event) {
      const scrollAmount = event.deltaY * 3;

      document.getElementById('discussions-list').scrollLeft += scrollAmount;

      event.preventDefault();
    },
    extractHourMinute(timeString) {
      const timeParts = timeString.split(':');
      if (timeParts.length >= 2) {
        const [hours, minutes] = timeParts.slice(0, 2);
        return `${hours}:${minutes}`;
      }
      return timeString;
    },
    openDiscussion(discussion) {
      if (discussion!=this.discussion) {
        this.discussionId = discussion.id
        this.discussion = discussion

        const message = {
          course_id: this.discussionId,
        };

        const messageString = JSON.stringify(message);

        this.socket.send(messageString);
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
    sendMessage() {
      axios.post(window.location.href.replace(window.location.origin, ''),
        {
           message: this.message,
           course_id: this.discussionId,
        },
        {
        headers: {
            'X-CSRFToken': this.csrfToken,
          }
        }
      )
      .then(response => {
        if (response.data.success) {
          this.message = ''
          const message = {
            course_id: this.discussionId,
          };

          const messageString = JSON.stringify(message);

          this.socket.send(messageString);
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
    }
  },
  mounted() {
    this.socket = new WebSocket('ws://'+window.location.host+'/ws/koding');

    this.socket.addEventListener('open', () => {
      console.log('WebSocket connection opened.');
    });

    this.socket.addEventListener('message', (event) => {
      let chatCard = document.getElementById('chat-card');
      const isAtBottom = chatCard.scrollHeight - chatCard.clientHeight <= chatCard.scrollTop + 1;

      const message = JSON.parse(event.data);
      this.messages = message;

      this.$nextTick(() => {

        if (isAtBottom) {
          chatCard.scrollTop = chatCard.scrollHeight - chatCard.clientHeight;
        }
      });
    });


    this.csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value
  },

  created() {
    axios.get(window.location.href.replace(window.location.origin, ''),
        {
           params: {
              type: 'initialization'
            }
        }
      )
      .then(response => {
        const data = response.data;
        this.discussions = data.discussions;
        this.user = data.user

        if (data.discussion) {
          this.openDiscussion(data.discussion)
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  },

  beforeUnmount() {
    this.socket.close();
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
        date: date.replace(/-/g, '/'),
        messages: groupedMessages[date],
      }));

      messageDays = messageDays.sort((a, b) => {
        const dateA = this.formatDate(a.date);
        const dateB = this.formatDate(b.date);

        return dateA - dateB;
      })

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
    background-color: rgb(255,207,86);
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
    border-color: rgb(255,207,86) transparent transparent transparent;
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
  #chat {
    height: calc(100% - 120px);
  }
</style>
