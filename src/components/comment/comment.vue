<template>
  <div class="c-comment">
    <p>
        <router-link :to="{name: 'user', params: {id: id}}"><span class="username">{{ username }}</span></router-link>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    username: {
      type: String,
      required: true
    },
    userId: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .username {
    font-weight: bold;
  }
  .c-comment {
    text-align: left;
  }
</style>
