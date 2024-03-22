import * as api from '../../api'
import actions from './actions'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    setStarred: (state, starred) => {
      state.data = starred.map((repo) => {
        repo.following = true
        repo.loading = false
        return repo
      })
    },
    setIssuesToRepo: (state, { id, issues }) => {
      state.data = state.data.map((repo) => {
        if (repo.id === id) {
          repo.issues = issues
        }
        return repo
      })
    },
    setFollowing: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = payload.following
          repo.loading = payload.loading
        }
        return repo
      })
    }
  },
  getters: {
    getFollowing: (state) => state.data.length,
    getStarredRepo: (state) => (id) => state.data.find((repo) => repo.id === id)
  },
  actions: {
    async fetchStarred ({ commit }, payload) {
      try {
        const { data } = await api.starred.getStarredRepos({ limit: payload?.limit })
        commit('setStarred', data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchIssues ({ commit }, { id, owner, repo }) {
      commit('setIssuesToRepo', {
        id,
        issues: {
          loading: true
        }
      })
      try {
        const { data } = await api.issues.getIssues({ owner, repo })
        commit('setIssuesToRepo', {
          id,
          issues: {
            data,
            loading: false
          }
        })
      } catch (e) {
        commit('setIssuesToRepo', {
          id,
          issues: {
            loading: false,
            error: e
          }
        })

        console.log(e)
      }
    },
    ...actions
  }
}
