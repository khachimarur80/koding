const app = Vue.createApp({
    data() {
        return {
        message: "Hello World",
        };
    },
});

const vuetify = Vuetify.createVuetify({});

app.use(vuetify);

app.mount('#app');