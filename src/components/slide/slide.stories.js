import xSlide from './slide.vue'

export default {
  title: 'xSlide',
  component: { xSlide },
  argTypes: {
    user: {
      type: Object,
      description: 'User info'
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
    xSlide
  },
  data () {
    return { args }
  },
  template: `
  <x-slide :user="args.user" :follow="args.follow" :img="args.img">
    <template #content>
     <div v-html="args.text"></div>
    </template>
  </x-slide>
  `
})

export const Default = template.bind({})

Default.args = {
  user: {
    username: 'Ivan',
    avatar: 'https://loremflickr.com/300/300',
    id: 5
  },
  text: `<span style="font-weight: bold">The easiest way</span> to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.
  For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
  `,
  follow: false,
  img: 'https://loremflickr.com/300/300'
}
