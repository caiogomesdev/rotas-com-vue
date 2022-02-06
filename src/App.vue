<template>
  <div id="app">
    <Header />
    <hr />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  name: "app",
  components:{ Header}
}
</script>

<style scoped>

</style>