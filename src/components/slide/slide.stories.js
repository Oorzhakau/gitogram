import xSlide from './slide.vue'

export default {
  title: 'xSlide',
  component: { xSlide },
  argTypes: {
    loading: {
      control: 'boolean'
    },
    data: {
      control: 'object'
    },
    follow: {
      control: 'boolean'
    },
    active: {
      control: 'boolean'
    }
  }
}

const template = (args) => ({
  components: {
    xSlide
  },
  data () {
    return { args }
  },
  template: `
    <x-slide
      :follow="args.follow"
      :loading="args.loading"
      :active="args.active"
      :data="args.data"
    />
  `
})

export const Default = template.bind({})

Default.args = {
  data: {
    username: 'Ivan',
    avatar: 'https://loremflickr.com/300/300',
    userId: 5,
    content: `<img src='https://loremflickr.com/300/300'><span style="font-weight: bold">The easiest way</span> to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.
    For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
    `
  },
  follow: true,
  loading: false,
  active: false
}
