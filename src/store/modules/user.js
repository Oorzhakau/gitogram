import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    user: {
      data: {},
      loading: false,
      active: false,
      error: false
    }
  },
  getters: {
    getSeniors (state) {
      return state.users.filter(user => user.status === 'senior')
    }
  },
  mutations: {
  },
  actions: {
    async getTrendings (state) {
      state.commit('setTredindLoading', true)
      try {
        const { data } = await api.trendings.getTrendings()
        console.log(data)
        state.commit('settrendings', data)
      } catch (error) {
        state.commit('setTredindError', 'Не удалось загрузить данные по трендам')
      } finally {
        state.commit('setTredindLoading', false)
      }
    }
  }
}
