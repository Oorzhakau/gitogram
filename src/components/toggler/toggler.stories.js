import toggler from './toggler.vue'

export default {
  title: 'toggler',
  components: { toggler }
}

export const defaultView = () => ({
  components: {
    toggler
  },
  template: `
    <toggler/>
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
