import publication from './publication.vue'

export default {
  title: 'publication',
  components: { publication }
}

export const DefaultView = () => ({
  components: {
    publication
  },
  setup () {
    return {
      publication: {
        id: '0',
        author: {
          id: '0',
          avatar: 'https://loremflickr.com/300/300',
          username: 'joshua_l'
        },
        title: 'Vue.js',
        keyword: 'JavaScript',
        description: 'framework for building interactive web applications',
        activeStar: true,
        activeFork: false,
        stars: '156k',
        forks: '4',
        comments: [
          {
            id: '0',
            author: { username: 'joshua_l' },
            text: "Enable performance measuring in production, at the user's request"
          }
        ],
        date: '15 MAY'
      }
    }
  },
  template: `
    <publication
      :publication="publication"
    />
  `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
