import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: {},
    loading: false,
    active: false,
    error: false
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.items.find((item) => item.id === id)
    }
  },
  mutations: {
    setTrendings (state, payload) {
      state.data = payload
    },
    setTredindLoading (state, payload) {
      state.loading = payload
    },
    setTredindError (state, payload) {
      state.error = payload
    },
    setReadMe (state, payload) {
      state.data.items = state.data.items?.map(
        repo => {
          if (payload.id === repo.id) {
            repo.readme = payload.content ? payload.content : ''
          }
          return repo
        }
      )
    },
    setReadMeLoading (state, payload) {
      state.loading = payload
    },
    setReadMeError (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchTrendings (state) {
      state.commit('setTredindLoading', true)
      try {
        const { data } = await api.trendings.getTrendings()
        state.commit('setTrendings', data)
      } catch (error) {
        state.commit('setTredindError', 'Не удалось загрузить данные по трендам')
      } finally {
        state.commit('setTredindLoading', false)
      }
    },
    async fetchReadMe ({ commit, getters }, { id, owner, repo }) {
      const currRepo = getters.getRepoById(id)
      if (currRepo.readme !== undefined) return
      commit('setReadMeLoading', true)
      try {
        console.log('FETCH README', repo)
        const { data } = await api.repos.getReadMe(owner, repo)
        commit('setReadMe', { id, content: data })
      } catch (error) {
        commit('setReadMeError', 'Не удалось загрузить данные по ReadMe')
        throw error
      } finally {
        commit('setReadMeLoading', false)
      }
    }
  }
}
