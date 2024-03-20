<template>
  <h1>User page</h1>
  <router-link to="/">Feed</router-link>
  <br>
  <button @click="getUser">GetUser</button>
  <br>
  <router-link active-class="my-class" :to="{name: 'user'}">Test</router-link>
  <br>
  <router-link :to="{name: 'profile'}">Profile</router-link>
  <br>
  <router-link :to="{name: 'history'}">History</router-link>
  <br>
  <router-view/>
</template>

<script>
import * as api from '../../api'

export default {
  methods: {
    async getUser () {
      try {
        const response = await api.auth.getUser()
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
