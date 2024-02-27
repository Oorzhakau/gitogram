
<template>
  <div class="feed">
    <ul class="feed-list">
      <li class="feed-item"
        v-for="publication in feed"
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
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
              :id="story.id"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { headerUserMenu } from '../../components/headerUserMenu'
import { feedItem } from '../../components/feed'
import { publication } from '../../components/publication'
import stories from './data.json'
import feed from './feed.json'

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
      stories: stories,
      feed: feed,
      user: { username: 'john1990', id: '1234', avatar: 'https://loremflickr.com/300/300' }
    }
  },
  methods: {
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
    justify-content: space-between;
  }
  .feed {
    width: 980px;
    margin-top: 265px;
    margin-left: auto;
    margin-right: auto;
    overflow: visible;
  }
</style>
