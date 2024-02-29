import userInfo from './userInfo.vue'

export default {
  title: 'userInfo',
  components: { userInfo }
}

export const defaultView = () => ({
  components: {
    userInfo
  },
  template: `
    <user-info
     username="Иванов Иван"
     avatar="https://loremflickr.com/300/300"
     id="5"
     />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}

export const activeView = () => ({
  components: {
    userInfo
  },
  template: `
    <user-info
     username="Иванов Иван"
     avatar="https://loremflickr.com/300/300"
     id="5"
     active
     />
  `
})

activeView.story = {
  name: 'Активированный вид'
}
