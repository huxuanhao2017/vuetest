<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sells">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header'

  const ERR_OK = 0
  export default {
    name: 'app',
    components: {
      'v-header': header
    },
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        if (response.body.errno === ERR_OK) {
          this.seller = response.body.data
        }
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixian.styl";

  /*#app */
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif*/
  /*-webkit-font-smoothing: antialiased*/
  /*-moz-osx-font-smoothing: grayscale*/
  /*text-align: center*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 24px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)

  .router-link-exact-active
    color: rgb(240, 20, 20);
</style>
