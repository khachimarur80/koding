const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  pages: {
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
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /\/settings/, to: '/settings.html' },
        { from: /\/account/, to: '/account.html' },
        { from: /\/discussions/, to: '/discussion.html' },
        { from: /\/create/, to: '/create.html' },
        { from: /\/browse/, to: '/browse.html' },
        { from: /\/course\/\d+\/chapter-\d+/, to: '/chapter.html' },
        { from: /\/course\/\d+/, to: '/course.html' },
        { from: /./, to: '/home.html' }
      ]
    }
  }
})
