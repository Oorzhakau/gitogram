import userInfo from './userInfo.vue'

export default {
  title: 'userInfo',
  components: { userInfo }
}

export const DefaultView = () => ({
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

DefaultView.story = {
  name: 'Стандартный вид'
}

export const ActiveView = () => ({
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

ActiveView.story = {
  name: 'Активированный вид'
}
