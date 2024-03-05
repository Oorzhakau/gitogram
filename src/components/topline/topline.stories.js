import topline from './topline.vue'

export default {
  title: 'topline',
  components: { topline }
}

export const DefaultView = () => ({
  components: {
    topline
  },
  setup () {
    return {
      stories: [{
        id: '0',
        avatar: 'https://loremflickr.com/300/300',
        username: 'Иванов Иван'
      }]
    }
  },
  template: `
    <topline>
      <template #headline>
        <h1>Заголовок</h1>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <p>{{ story.username }}<p/>
          </li>
        </ul>
      </template>
    </topline>
  `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
