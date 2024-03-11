
<template>
  <div class="feed">
    <ul class="feed-list">
      <li class="feed-item"
        v-for="publication in items"
        :key="publication.id"
      >
        <feed-item
          :publication="publication"
        >
          <template #content>
            <publication
              :publication="publication"
              @updateStar="toggleStar(publication)"
              @updateFork="toggleFork(publication)"
            />
          </template>
        </feed-item>
      </li>
    </ul>
    <h1> {{ $store.state.foo }}</h1>
  </div>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline__container">
          <div class="topline__col">
            <div class="logo">
              <a href="./index.html" class="logo__link">
                <icon name="logo" alt="Логотип"/>
              </a>
            </div>
          </div>
          <div class="topline__col">
            <header-user-menu
              :avatar="user.avatar"
              :id="user.id"
              @signOut="handlePress(story.id)"
              @home="handlePress(story.id)"
            />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in trendings.data.items" :key="story.id">
            <story-user-item
              :avatar="story.owner.avatar_url"
              :username="story.owner.login"
              :id="story.owner.id"
              @onPress="handlePress(story.owner.id)"
              @storyPress="$router.push({name: 'stories', params: {initialSlide: story.id}})"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { headerUserMenu } from '../../components/headerUserMenu'
import { feedItem } from '../../components/feed'
import { publication } from '../../components/publication'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUserItem,
    headerUserMenu,
    feedItem,
    publication
  },
  data () {
    return {
      user: { username: 'john1990', id: '1234', avatar: 'https://loremflickr.com/300/300' }
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    }),
    handlePress (userId) {
      console.log('userId=' + userId)
    },
    handlerToggle (feedItemId) {
      console.log('feedItemId=' + feedItemId)
    },
    toggleStar (pub) {
      pub.activeStar = !pub.activeStar
    },
    toggleFork (pub) {
      pub.activeFork = !pub.activeFork
    },
    goToUser (user) {
      this.$router.push({
        name: 'user',
        params: {
          id: user.id
        }
      })
    }
  },
  async created () {
    try {
      await this.fetchTrendings()
      console.log(this.$state)
      const { data } = this.trendings
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    width: 183px;
    height: 40px;
  }
  .topline {
    top: 0px;
    left: 0px;
    right: 0px;
    position: fixed;
    width: 100%;
    &__container {
      display: flex;
      justify-content: space-between;
    }

    &__col {
      display: flex;
      align-items: center;
    }
  }
  .stories {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .stories-item {
    flex: 1;
    min-width: 100px;
  }
  .feed {
    width: 980px;
    margin-top: 300px;
    margin-left: auto;
    margin-right: auto;
    overflow: visible;
  }
</style>
