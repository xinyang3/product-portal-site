<template>
  <div id="app">
    <headers></headers>
    <div id="main">
      <div class="compass body--container container-fluid">
        <div class="row">
          <menus></menus>
          <!-- <contents></contents> -->
        </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
      headers: () => import('views/frame/headers.vue'),
      menus: () => import('views/frame/menus.vue'),
      footers: () => import('views/frame/footers.vue')
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>