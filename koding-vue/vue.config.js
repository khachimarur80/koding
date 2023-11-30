const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  //publicPath: '/koding/courses/static/src/vue/dist/',
  //outputDir: path.resolve(__dirname, '../koding/courses/static/src/vue/dist/'), 
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/home.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'home'],
    },
    'home' : {
      entry: './src/pages/Home/main.js',
      template: 'public/home.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'home'],
    },
    'settings' : {
      entry: './src/pages/Settings/main.js',
      template: 'public/settings.html',
      title: 'Settings',
      chunks: [ 'chunk-vendors', 'chunk-common', 'settings'],
    },
    'account' : {
      entry: './src/pages/Account/main.js',
      template: 'public/account.html',
      title: 'Account',
      chunks: [ 'chunk-vendors', 'chunk-common', 'account'],
    },
    'course' : {
      entry: './src/pages/Course/main.js',
      template: 'public/course.html',
      title: 'Course',
      chunks: [ 'chunk-vendors', 'chunk-common', 'course'],
    },
    'browse' : {
      entry: './src/pages/Browse/main.js',
      template: 'public/browse.html',
      title: 'Browse',
      chunks: [ 'chunk-vendors', 'chunk-common', 'browse'],
    },
    'discussion' : {
      entry: './src/pages/Discussion/main.js',
      template: 'public/discussion.html',
      title: 'Discussion',
      chunks: [ 'chunk-vendors', 'chunk-common', 'discussion'],
    },
    'signup' : {
      entry: './src/pages/Signup/main.js',
      template: 'public/signup.html',
      title: 'Signup',
      chunks: [ 'chunk-vendors', 'chunk-common', 'signup'],
    },
    'login' : {
      entry: './src/pages/Login/main.js',
      template: 'public/login.html',
      title: 'Login',
      chunks: [ 'chunk-vendors', 'chunk-common', 'login'],
    },
    'create' : {
      entry: './src/pages/Create/main.js',
      template: 'public/create.html',
      title: 'Create',
      chunks: [ 'chunk-vendors', 'chunk-common', 'create'],
    },
    'chapter' : {
      entry: './src/pages/Chapter/main.js',
      template: 'public/chapter.html',
      title: 'Chapter',
      chunks: [ 'chunk-vendors', 'chunk-common', 'chapter'],
    }
  },
  filenameHashing: false,
  runtimeCompiler: true,
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  }
})
