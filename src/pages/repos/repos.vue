<template>
  <div class="x-container">
    <div class="topline">
      <topline>
        <template #headline>
          <div class="topline__container">
          <div class="topline__col">
            <div class="logo">
              <router-link v-bind:to="{ path: '/' }"><icon name="logo" alt="Логотип"/></router-link>
            </div>
          </div>
          <div class="topline__col">
            <header-user-menu v-if="user"
              :avatar="user.avatar_url"
              :id="user.id"
            />
          </div>
          </div>
        </template>
      </topline>
    </div>
    <div class="content">
      <div class="repo-block">
        <div class="profile">
          <div class="profile__head repo-title">My profile</div>
          <div class="profile__info">
            <profile
            :avatar="user.avatar_url"
            :login="user.login"
            :repos="user.public_repos"
            :following="user.following"
            :username="user.name"
            />
          </div>
        </div>
      </div>
      <div class="right-block">
        <div class="right-block__header">
          <div class="right-block__title repo-title">
            Repositories
          </div>
          <div class="right-block__count">
          {{ user.public_repos }}
          </div>
        </div>
        <ul class="post-list">
          <li class="post__item" v-for="item in repos" :key="item.id">
            <postRepos :data="getData(item)"/>
          </li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
import { headerUserMenu } from '../../components/headerUserMenu'
import { icon } from '../../icons'
import { topline } from '../../components/topline'
import { profile } from '../../components/userProfile'
import { postRepos } from '../../components/postRepos'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
  components: {
    headerUserMenu,
    icon,
    topline,
    profile,
    postRepos
  },
  setup () {
    const { dispatch, state } = useStore()
    onMounted(() => {
      try {
        console.log('start')
        dispatch('repos/fetchRepos')
        dispatch('user/getUser')
      } catch (e) {
        console.log(e)
      }
    })
    return {
      repos: computed(() => state.repos.data),
      user: computed(() => state.user.data),
      getData (item) {
        return {
          username: item.owner.login,
          title: item.name,
          description: item.description,
          stars: item.stargazers_count,
          forks: item.forks,
          avatar: item.owner.avatar_url,
          issues: item.data,
          repos: item.name,
          date: new Date(item.created_at),
          id: item.id
        }
      }
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
.content{
  display: flex;
  width: 100%;
  margin-top: 85px;
  text-align: left;
  justify-content: space-between;
}
.repo-block{
    border-right: 1px solid #D3D3D3;
    padding: 40px 0px;
}
.profile{
    width: 349px;
}
.profile__head{
    margin-bottom: 30px;
}
.repo-title{
    color:  #262626;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.07em;
}
.right-block{
    padding: 50px 0px 0px 74px;
}
.right-block__header{
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;
}
.right-block__count{
    color: #9E9E9E;
    text-align: right;
    font-size: 18px;
}
.post__item{
    margin-bottom: 18px;
}
</style>
