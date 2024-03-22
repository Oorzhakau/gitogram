
<template>
  <div class="feed">
    <ul class="feed-list">
      <li class="feed-item"
        v-for="publication in starred"
        :key="publication.id"
      ><!--getUnstarredOnly-->
        <feed-item
          :publication="publication"
          @loadIssues="fetchIssues(
                {
                  id: publication.id,
                  owner: publication.owner.login,
                  repo: publication.name
                 })"
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
            <header-user-menu v-if="user"
              :avatar="user.avatar_url"
              :id="user.id"
              @signOut="handlePress(story.id)"
              @home="handlePress(story.id)"
            />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in starred" :key="story.id"> <!-- getUnstarredOnly-->
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
import { mapState, mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapState({
      trendings: state => state.trendings,
      starred: state => state.starred.data,
      user: state => state.auth.user
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchStarred: 'starred/fetchStarred',
      fetchIssues: 'starred/fetchIssues',
      getUser: 'auth/getUser',
      starRepo: 'trendings/starRepo',
      unStarRepo: 'trendings/unStarRepo'
    }),
    handlePress (userId) {
      console.log('userId=' + userId)
    },
    handlerToggle (feedItemId) {
      console.log('feedItemId=' + feedItemId)
    },
    async toggleStar (pub) {
      // if (pub.activeStar) {
      //   await this.unStarRepo(pub.id)
      // } else {
      //   await this.starRepo(pub.id)
      // }
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
    if (!this.user) {
      await this.getUser()
    }
  },
  async mounted () {
    try {
      await this.fetchTrendings()
      await this.fetchStarred()
    } catch (error) {
      console.log(error)
      throw error
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
    flex-wrap: no-wrap;
    justify-content: space-between;
    overflow-x: hidden;
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
