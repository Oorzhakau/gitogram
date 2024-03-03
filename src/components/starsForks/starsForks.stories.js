import starsForks from './starsForks.vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

const methods = {
  onStar: action('updateStar'),
  onFork: action('updateFork')
}

export default {
  title: 'starsForks',
  components: { starsForks },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    starsForks
  },
  props: {
    starCount: {
      default: text('starCount', '15')
    },
    forkCount: {
      default: text('forkCount', '0')
    },
    statusStar: {
      default: boolean('activeStar', true)
    },
    statusFork: {
      default: boolean('activeFork', false)
    }
  },
  template: `
    <stars-forks
      :starCount="starCount"
      :forkCount="forkCount"
      :activeStar="statusStar"
      :activeFork="statusFork"
      @updateStar="onStar"
      @updateFork="onFork"
    />
  `,
  methods
})

defaultView.story = {
  name: 'Стандартный вид'
}

export const activeView = () => ({
  components: {
    starsForks
  },
  template: `
    <stars-forks
      :starCount="5"
      :forkCount="20"
      :activeStar="true"
      :activeFork="true"
      @updateStar="onStar"
      @updateFork="onFork"
    />
  `,
  methods
})

defaultView.story = {
  name: 'Активированный вид'
}
