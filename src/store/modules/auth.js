import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    user: null,
    loading: false,
    error: false
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setUserLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    async getUser (state) {
      try {
        state.commit('setUserLoading', true)
        const { data } = await api.auth.getUser()
        state.commit('setUser', data)
      } catch (error) {
        console.log(error)
      } finally {
        state.commit('setUserLoading', false)
      }
    },
    async logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}
