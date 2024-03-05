<template>
  <div
    :class="[
      'c-button',
      {'active': active}
      ]"
    @click="follow"
    >
    <span class="text">
      {{ active ? "follow" : "unfollow" }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'xButton',
  props: {
    active: {
      type: Boolean
    }
  },
  emits: ['follow'],
  methods: {
    follow () {
      this.$emit('follow', this.active)
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-button {
    display: block;
    max-width: 300px;
    text-align: center;
    border-radius: 5px;
    padding: 7px 0px;
    background-color: var(--lightGrey);
    overflow: hidden;
    cursor: pointer;
  }
  .text {
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
  }
  .active {
    background-color: var(--green);
  }
</style>
