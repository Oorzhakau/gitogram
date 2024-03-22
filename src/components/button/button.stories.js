import xButton from './button.vue'

export default {
  title: 'xButton',
  components: { xButton },
  argTypes: {
    theme: {
      control: { type: 'text', default: 'green' }
    },
    loading: {
      control: { type: 'boolean' }
    },
    text: {
      control: { type: 'text', default: 'follow' }
    }
  },
  args: {
    theme: 'green',
    loading: false,
    text: 'follow'
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
      :theme="args.theme"
      :loading="args.loading"
      @follow="onFollow"
    >{{args.text}}</x-button>
  `
})

DefaultView.story = {
  name: 'Активный вид'
}
