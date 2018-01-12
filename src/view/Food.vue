<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        评论
      </div>
      <div class="tab-item">
        商家
      </div>
    </div>
   <router-view></router-view>
  </div>
</template>
<script>
  import header from '../components/header/header'

  export default {
    components: {
      'v-header': header
    }
  }
</script>
<style>
  .tab {
    display: flex;
    width: 100%;
    line-height: 40px;

  }

  .tab-item {
    flex: 1;
    text-align: center;
  }
</style>
