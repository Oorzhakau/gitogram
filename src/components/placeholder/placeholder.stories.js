import placeholder from './placeholder.vue'

export default {
  title: 'placeholder',
  component: { placeholder },
  argTypes: {
    paragraphs: {
      type: Number,
      description: 'paragraphs'
    },
    text: {
      control: 'text'
    },
    follow: {
      control: 'boolean'
    }
  },
  img: {
    control: 'text'
  }
}

const template = (args) => ({
  components: {
    placeholder
  },
  data () {
    return { args }
  },
  template: `
  <placeholder :paragraphs="args.paragraphs">
  </placeholder>
  `
})

export const Default = template.bind({})

Default.args = {
  paragraphs: 1
}
