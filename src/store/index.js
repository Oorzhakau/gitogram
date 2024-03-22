import { createStore } from 'vuex'
import auth from './modules/auth'
import trendings from './modules/trendings'
import starred from './modules/starred'
import user from './modules/user'

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
    user
  }
})
