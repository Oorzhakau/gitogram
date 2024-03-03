import headerUserMenu from './headerUserMenu.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  onSignOut: action('signOut'),
  onHome: action('homePage')
}

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
      @signOut="onSignOut"
      @homePage="onHome"
    />
  `,
  methods
})

defaultView.story = {
  name: 'Стандартный вид'
}
