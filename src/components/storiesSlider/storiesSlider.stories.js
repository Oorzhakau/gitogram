import storiesSlider from './storiesSlider.vue'

export default {
  title: 'storiesSlider',
  component: { storiesSlider },
  argTypes: {
    data: {
      control: 'object'
    },
    follow: {
      control: 'boolean'
    }
  }
}

const template = (args) => ({
  components: {
    storiesSlider
  },
  data () {
    return { args }
  },
  template: `
  <stories-slider>
  </stories-slider>
  `
})

export const Default = template.bind({})

Default.args = {
  data: {
    username: 'Ivan',
    avatar: 'https://loremflickr.com/300/300',
    id: 5,
    follow: false
  }
}
