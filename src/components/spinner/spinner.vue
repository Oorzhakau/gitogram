<template>
  <div :class='["icon-wrapper", `${theme}`]'>
    <icon name="spinner"/>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  props: {
    theme: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-wrapper {
    width: 100%;
    height: 100%;
    svg {
      animation: rotate 2s linear infinite;
    }
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
        }
    }
  }
  .grey {
    color: var(--lightGrey);
  }
  .green {
    color: var(--green);
  }
  .white {
    color: white;
  }
</style>
