import spinner from './spinner.vue'

export default {
  title: 'spinner',
  component: { spinner },
  argTypes: {
    theme: {
      control: { type: 'text', default: 'green' }
    }
  },
  args: {
    theme: 'green'
  }
}

const template = (args) => ({
  components: {
    spinner
  },
  data () {
    return { args }
  },
  template: '<spinner :theme="args.theme"/>'
})

export const Default = template.bind({})

Default.story = {
  name: 'Активированный вид'
}
