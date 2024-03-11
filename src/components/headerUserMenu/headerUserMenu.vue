<template>
  <div class="x-container">
        <div class="icon" @click="$emit('homePage', 'args')">
          <router-link :to="{name: 'user', params: {id: id}}">
            <icon name="home"/>
          </router-link>
        </div>
        <div class="avatar">
          <router-link :to="{name: 'user', params: {id: id}}">
            <img :src="avatar" class="img" alt="username avatar"/>
          </router-link>
        </div>
      <div class="icon" @click="$emit('signOut', 'args')">
        <icon name="signout"/>
      </div>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  props: {
    id: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  },
  emits: ['homePage', 'signOut'],
  methods: {
    onPress (id) {
      this.$emit('onPress')
    }
  }
}
</script>

<style lang="scss" scoped>
  .x-container {
    display: flex;
    width: 145px;
  }
  .avatar {
    width: 37px;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    color:#262626;
    width: 32px;
    &:hover {
      color: gray;
    }
  }
  .img {
    width: 37px;
    border-radius: 50%;
    &:hover {
      border-color: transparent;
    }
  }
</style>
