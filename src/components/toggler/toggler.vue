<template>
  <button :class="['button', {'active': isOpened }]" @click="toggle">
    <span class="text">{{ isOpened ? "Hide" : "Show" }} issues</span>
    <span class="icon">
      <icon name="triangle"/>
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'toggler',
  components: {
    icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  emits: ['onToggle'],
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss">
  .button {
    display: inline-flex;
    align-items: center;
    padding: 0;
    .text {
      padding-right: 5px;
    }
    .icon {
      width: 10px;
      transition: transform 0.2s ease;
      transform: rotate(180deg);
    }

    &.active {
      .icon {
        transition: transform 0.2s ease;
        transform: rotate(0deg);
      }
    }
  }
</style>
