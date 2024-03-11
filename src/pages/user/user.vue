<template>
  <h1>User page</h1>
  <router-link to="/"></router-link>
  <br>
  <router-link active-class="my-class" :to="{name: 'user'}"></router-link>
  <br>
  <router-link :to="{name: 'profile'}"></router-link>
  <br>
  <router-link :to="{name: 'history'}"></router-link>
  <br>
  <router-view/>
</template>

<script>
export default {
  created () {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
</style>
