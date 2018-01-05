<template>
  <p>About dadapage</p>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        msg: 'Welcome to huxuanhao Vue.js App',
        message: '<h1>hxh vuetest</h1>',
        class1: true,
        seen: true,
        sites: [{name: 'Core Docs', url: 'https://vuejs.org'},
          {name: 'Forum', url: 'https://forum.vuejs.org'},
          {name: 'Community Chat', url: 'https://chat.vuejs.org'},
          {name: 'Twitter', url: 'https://twitter.com/vuejs'},
          {name: 'Docs for This Template', url: 'http://vuejs-templates.github.io/webpack/'}],
        webs: [{name: 'Runoob', url: 'www.runoob.com'},
          {name: 'Google', url: 'www.google.com'}],
        checked: false,
        checkedNames: [],
        selected: ''
      }
    }
  }
</script>
