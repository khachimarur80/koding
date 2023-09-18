const app = Vue.createApp({
    data() {
        return {
            message: "Hello World",
        };
    },
});

const vuetify = Vuetify.createVuetify({
    theme: {
        defaultTheme: 'dark'
    }
});

app.use(vuetify);

app.mount('#app');