<template>
  <div class="user-info">
    <a :href="id">
      <div class="avatar">
        <img class="img" :src="avatar" alt="user avatar">
      </div>
    </a>
    <div class="username">{{ username }}</div>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  props: {
    id: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-info {
    display: flex;
    align-items: center;
  }
  .avatar {
    width: 55px;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 15px;
  }
  .img {
    width: 45px;
    border-radius: 50%;
    &:hover {
      border-color: transparent;
    }
  }
  .username {
    font-size: 18px;
    font-weight: bold;
  }
</style>
