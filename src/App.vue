<template>
  <div id="app">
    <headers></headers>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
      headers: () => import('views/headers.vue')
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