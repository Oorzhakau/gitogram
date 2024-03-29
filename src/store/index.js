import { createStore } from 'vuex'
import auth from './modules/auth'
import trendings from './modules/trendings'
import starred from './modules/starred'
import user from './modules/user'
import repos from './modules/repos'
import followings from './modules/following'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      console.log('getUnstarredOnly - ', state)
      return state.trendings.data.items?.filter((trendingsRepo) => {
        return !state.starred.data.some(starredRepo => {
          return trendingsRepo.id === starredRepo.id
        })
      })
    }
  },
  modules: {
    auth,
    trendings,
    starred,
    user,
    repos,
    followings
  }
})
