<template>
  <div :class='["c-progress", {"active": startProgress}]'>
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'xProgress',
  data () {
    return {
      startProgress: false
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    setTimeout(() => {
      this.startProgress = this.active
    }, 0)

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  },
  watch: {
    active () {
      this.startProgress = !this.startProgress
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-progress {
  background: var(--lightGreen);
  height: 2px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

    &.active {
        .indicator {
            width: 100%;
            transition: 5s;
        }
    }
  }

  .indicator {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0;
    background: var(--green);
  }
</style>
