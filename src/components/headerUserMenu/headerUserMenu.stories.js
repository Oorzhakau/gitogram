import headerUserMenu from './headerUserMenu.vue'

export default {
  title: 'headerUserMenu',
  components: { headerUserMenu }
}

export const defaultView = () => ({
  components: {
    headerUserMenu
  },
  template: `
    <header-user-menu
      avatar="https://loremflickr.com/300/300"
    />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
