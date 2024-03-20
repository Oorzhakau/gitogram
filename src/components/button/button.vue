<template>
  <div
    :class="[
      'c-button',
      {'active': active}
      ]"
    @click="follow"
    >
    <div class="text">
      <p v-if="!loading">{{ active ? "follow" : "unfollow" }}</p>
      <div class="spinner-container" v-else>
        <spinner />
      </div>
    </div>
  </div>
</template>

<script>
import { spinner } from '../spinner'
export default {
  name: 'xButton',
  components: {
    spinner
  },
  props: {
    active: {
      type: Boolean
    },
    loading: Boolean
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
    height: 44px;
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
  .spinner-container {
    width: 30px;
    text-align: center;
    margin: 0 auto;
    color: #FFF;
  }
</style>
