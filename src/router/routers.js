import { auth } from '../pages/auth'
import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { profile } from '../pages/profile'
import { history } from '../pages/history'
import { notFound } from '../pages/not-found'
const user = () => import('../pages/user/user.vue')

export default [
  {
    path: '/',
    component: feeds,
    name: 'feed'
  },
  {
    path: '/auth',
    component: auth,
    name: 'auth'
  },
  {
    path: '/stories/:initialSlide(\\d+)',
    component: stories,
    name: 'stories'
  },
  {
    path: '/user',
    component: user,
    name: 'user',
    props: true,
    children: [
      {
        path: '/:id(\\d+)',
        name: 'user',
        component: user
      },
      {
        path: 'profile',
        name: 'profile',
        component: profile
      },
      {
        path: 'history',
        name: 'history',
        component: history
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFound
  }
]
