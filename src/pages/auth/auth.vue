<template>
  <button @click="getCode">Enter</button>
</template>

<script>
import * as api from '../../api'

export default {
  methods: {
    async getCode () {
      try {
        const githubAuthApi = 'https://github.com/login/oauth/authorize'
        const params = new URLSearchParams()
        params.append('client_id', process.env.VUE_APP_CLIENT_ID)
        params.append('scope', 'repo:status read:user')
        window.location.href = `${githubAuthApi}?${params}`
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const reponse = await api.auth.getAuthToken(code)
        const token = reponse.data.token
        localStorage.setItem('token', token)
        this.$router.replace({ name: 'feed' })
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
