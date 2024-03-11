<template>
  <div class="icon-wrapper">
    <icon name="spinner"/>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  }
}
</script>

<style lang="scss" scoped>
  .icon-wrapper {
    width: 100%;
    height: 100%;
    color: var(--green);
    svg {
      animation: rotate 2s linear infinite;
    }
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
        }
    }
  }
</style>
