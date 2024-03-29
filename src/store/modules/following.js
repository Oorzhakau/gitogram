import axios from 'axios'

export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    set_user: (state, payload) => {
      state.data = payload
    }
  },
  actions: {
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
        console.log(data)
        commit('set_user', data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
