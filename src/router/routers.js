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
    path: '/stories/:initialSlide(\\d+)',
    component: stories,
    name: 'stories'
  },
  {
    path: '/user/:id(\\d+)',
    component: user,
    name: 'user',
    props: true,
    children: [
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
