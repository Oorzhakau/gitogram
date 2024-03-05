import storyUserItem from './storyUserItem.vue'

export default {
  title: 'storyUserItem',
  components: {
    storyUserItem
  }
}

export const DefaultView = () => ({
  components: {
    storyUserItem
  },
  template: `
    <story-user-item
      avatar="https://loremflickr.com/300/300"
      username="Иванов Иван"
    />
  `
})
