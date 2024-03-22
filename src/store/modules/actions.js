import * as api from '../../api'

export default {
  async starRepo ({ commit, getters }, id) {
    const { name: repo, owner } = getters.getRepoById(id)
    commit('setFollowing', {
      id,
      data: {
        status: false,
        loading: true,
        error: ''
      }
    })

    try {
      await api.starred.starRepo({ owner: owner.login, repo })
      commit('setFollowing', { id, data: { status: true } })
    } catch (error) {
      commit('setFollowing', { id, data: { status: true, error: 'Error with following to repo' } })
    } finally {
      commit('setFollowing', { id, data: { loading: false } })
    }
  },
  async unStarRepo ({ commit, getters }, id) {
    const { name: repo, owner } = getters.getRepoById(id)
    commit('setFollowing', { id, data: { loading: true } })
    try {
      await api.starred.unStarRepo({ owner: owner.login, repo })
      commit('setFollowing', { id, data: { status: false } })
    } catch (error) {
      commit('setFollowing', { id, data: { status: false, error: 'Error with unfollowing to repo' } })
      console.log(error)
    } finally {
      commit('setFollowing', { id, data: { loading: false } })
    }
  }
}
