import spinner from './spinner.vue'

export default {
  title: 'spinner',
  component: { spinner }
}

const template = (args) => ({
  components: {
    spinner
  },
  data () {
    return { args }
  },
  template: '<spinner/>'
})

export const Default = template.bind({})

Default.story = {
  name: 'Активированный вид'
}
