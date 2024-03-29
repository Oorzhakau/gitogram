import loader from './loader.vue'

export default {
  title: 'loader',
  component: { loader }
}

const template = () => ({
  components: {
    loader
  },
  template: `
  <loader></loader>
  `
})

export const Default = template.bind()
