import axios from 'axios'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    set_repos: (state, payload) => {
      state.data = payload
    }
  },
  actions: {
    async fetchRepos ({ commit }) {
      const token = localStorage.getItem('token')
      try {
        const { data } = await axios.get(
          'https://api.github.com/user/repos',
          {
            headers: {
              Authorization: `token ${token}`
            }
          }
        )
        commit('set_repos', data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
