<template>
  <div :class='["c-progress", {"active": active}]'>
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'xProgress',
  data () {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.active = true
      }, 100)
    })

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
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
    transition: 5s;
  }
</style>
