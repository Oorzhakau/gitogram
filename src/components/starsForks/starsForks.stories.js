import starsForks from './starsForks.vue'

export default {
  title: 'starsForks',
  components: { starsForks }
}

export const defaultView = () => ({
  components: {
    starsForks
  },
  template: `
    <stars-forks
      :starCount="5"
      :forkCount="20"
      :activeStar="false"
      :activeFork="false"
    />
  `
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
    />
  `
})

defaultView.story = {
  name: 'Активированный вид'
}
