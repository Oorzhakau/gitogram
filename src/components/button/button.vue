<template>
  <div
    :class="['c-button', `${theme}`]"
    @click="follow"
    >
    <div class="text">
      <p v-if="!loading"><slot></slot></p>
      <div class="spinner-container" v-else>
        <spinner theme="white"/>
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
    theme: {
      type: String
    },

    loading: {
      type: Boolean
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
  .green {
    background-color: var(--green);
  }
  .spinner-container {
    width: 30px;
    text-align: center;
    margin: 0 auto;
    color: #FFF;
  }
</style>
