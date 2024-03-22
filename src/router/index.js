import { createRouter, createWebHashHistory } from 'vue-router'
import routers from './routers'
import * as api from '../api'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'

  try {
    await api.auth.getUser()
    next(authRoute ? { name: 'feeds' } : null)
  } catch (error) {
    if (error.response.status === 401) {
      next(authRoute ? null : { name: 'auth' })
    }
  }
})

export default router
