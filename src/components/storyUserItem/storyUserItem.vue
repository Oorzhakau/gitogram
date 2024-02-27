<template>
  <button class="c-story-user-item" @click="onPress">
    <div class="avatar">
      <img :src="avatar" class="img" alt="username avatar"/>
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  emits: ['onPress'],
  methods: {
    onPress (id) {
      this.$emit('onPress')
    }
  }
}
</script>

<style lang="scss" scoped>
  .avatar {
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img {
    border: 2px solid #A6328D;
    padding: 3px;
    border-radius: 50%;
    width: 95px;
    &:hover {
      border-color: transparent;
    }
  }
</style>
