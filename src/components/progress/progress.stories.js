import xProgress from './progress.vue'

export default {
  title: 'xProgress',
  component: { xProgress },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progres reaches the end'
    },
    active: {
      control: 'boolean'
    }
  }
}

export const DefaultView = (args) => ({
  components: { xProgress },
  data () {
    return { args }
  },
  template: `
    <x-progress @onFinish="args.onFinish" :active="args.active"/>
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
