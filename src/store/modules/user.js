import axios from 'axios'

export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    set_user: (state, payload) => {
      state.data = payload
    },
    set_following: (state, payload) => {
      state.data = payload
    },
    set_repos: (state, payload) => {
      state.data = payload
    }
  },
  actions: {
    async getUser ({ commit }) {
      const token = localStorage.getItem('token')
      try {
        const { data } = await axios.get(
          'https://api.github.com/user',
          {
            headers: {
              Authorization: `token ${token}`
            }
          }
        )
        commit('set_user', data)
        console.log(data)
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async getUserFollowing ({ commit }) {
      const token = localStorage.getItem('token')
      try {
        const { data } = await axios.get(
          'https://api.github.com/user/following',
          {
            headers: {
              Authorization: `token ${token}`
            }
          }
        )
        commit('set_following', data)
        console.log(data)
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async getUserRepos ({ commit }) {
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
        console.log(data)
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }
}
