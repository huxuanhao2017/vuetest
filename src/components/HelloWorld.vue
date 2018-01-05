<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="hello">
    <h1>{{ msg | capitalize}}</h1>
    <input v-model="msg">
    <button v-on:click="reverseMessage">反转字符串</button>
    <!--使用 v-html 指令用于输出 html 代码-->
    <div v-html="message"></div>
    <!--HTML 属性中的值应使用 v-bind 指令-->
    <div v-bind:class="{'class1': class1}">
      directiva v-bind:class
    </div>
    <!--指令是带有 v- 前缀的特殊属性-->
    <p v-if="seen">现在你看到我了</p>
    <h2>Essential Links</h2>
    <ul>
      <template v-for="site in sites">
        <li><a v-text="site.name" :href="site.url"></a></li>
      </template>
    </ul>
    <h2>Ecosystem</h2>
    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <p>多个复选框：</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>
    <select v-model="selected" name="fruit">
      <option value="">选择一个网站</option>
      <template v-for="web in webs">
        <option v-text="web.name" v-bind:value="web.url"></option>
      </template>
    </select>

    <div id="output">
      选择的网站是: {{selected}}
    </div>
    <router-link to="/about">Go to about</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
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
    },
    methods: {
      reverseMessage: function () {
        this.msg = this.msg.split('').reverse().join('')
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.toUpperCase()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .class1 {
    background: #444;
    color: #eee;
  }
</style>
