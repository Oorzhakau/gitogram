<template>
  <div class="user-info">
    <a :href="id">
      <div class="avatar">
        <img :class="['img', {'bordered': active}]" :src="avatar" alt="user avatar">
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
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
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
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  .img {
    width: 100%;
    height: 100%;
    padding: 3px;
    border: 2px solid transparent;
    border-radius: 50%;
    object-fit: cover;
  }

  .username {
    font-size: 18px;
    font-weight: bold;
  }

  .bordered {
    border-color: #A6328D;
  }
</style>
