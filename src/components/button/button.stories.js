import xButton from './button.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  onFollow: action('follow')
}

export default {
  title: 'xButton',
  components: { xButton },
  argTypes: {
    active: {
      control: { type: 'boolean' }
    }
  },
  args: {
    active: true
  }
}

export const DefaultView = (args) => ({
  components: {
    xButton
  },
  data () {
    return {
      args
    }
  },
  template: `
    <x-button
      :active="args.active"
      @follow="onFollow"
    />
  `,
  methods
})

DefaultView.story = {
  name: 'Активный вид'
}
