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
                Following
              </div>
              <div class="right-block__count">
                {{ user.following }}
              </div>
            </div>
            <ul class="post-list">
              <li class="post__item" v-for="item in followings" :key="item.id">
                <following
                :login="item.login"
                :status="item.type"
                :avatar="item.avatar_url"
                />
              </li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>
import { headerUserMenu } from '../../components/headerUserMenu'
import { icon } from '../../icons'
import { following } from '../../components/userFollowing'
import { topline } from '../../components/topline'
import { profile } from '../../components/userProfile'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
  components: {
    headerUserMenu,
    topline,
    icon,
    profile,
    following
  },
  setup () {
    const { dispatch, state } = useStore()
    onMounted(() => {
      try {
        dispatch('followings/getUserFollowing')
        dispatch('user/getUser')
        console.log(this.user)
      } catch (e) {
        console.log(e)
      }
    })
    return {
      user: computed(() => state.user.data),
      followings: computed(() => state.followings.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-repos{
    height: 100vh;
}
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
  height: 100%;
  margin-top: 120px;
  text-align: left;
  justify-content: space-between;
}
.leftBlock{
    border-right: 1px solid #D3D3D3;
    padding: 40px 121px;
}
.profile{
    width: 349px;
}
.profile__head{
    margin-bottom: 30px;
}
.repo-title{
    color:  #262626;
    font-size: 26px;
    font-weight: 700;
}
.right-block{
    padding: 0px 0px 74px;
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
    font-weight: 700;
}
.post__item {
  padding: 0px 0px 20px 0px;
}
</style>
