import feedItem from './feed.vue'
import { publication } from '../../components/publication'

export default {
  title: 'feedItem',
  components: { feedItem }
}

export const DefaultView = () => ({
  components: {
    feedItem,
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
    <feed-item
    :publication=""
    >
      <template #content>
        <publication
          :publication="publication"
        />
      </template>
    </feed-item>
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
