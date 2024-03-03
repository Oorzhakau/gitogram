<template>
  <div class="btn-set">
    <button class="btn" @click="updateStar">
      <div class="btn-container">
        <div :class="['icon-wrapper', {'active': activeStar}]">
          <icon name="star"/>
        </div>
        <div class="btn-description">Star</div>
      </div>
    </button>
    <div class="middle"> {{ starCount }}</div>
    <button class="btn" @click="updateFork">
      <div class="btn-container">
        <div :class="['icon-wrapper', 'icon-wrapper--min', {'active': activeFork}]">
          <icon name="fork"/>
        </div>
        <div class="btn-description">Fork</div>
      </div>
    </button>
    <div class="end"> {{ forkCount }}</div>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  props: {
    starCount: {
      type: String,
      default: '0'
    },
    forkCount: {
      type: String,
      default: '0'
    },
    activeStar: {
      type: Boolean,
      default: false
    },
    activeFork: {
      type: Boolean,
      default: false
    }
  },
  emits: ['updateStar', 'updateFork'],
  methods: {
    updateStar () {
      this.$emit('updateStar')
    },
    updateFork () {
      this.$emit('updateFork')
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-set {
    display: inline-flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 10%);
    border-radius: 5px;
    height: 30px;
  }
  button {
    height: 28px;
    background-color: #FAFBFC;
    cursor: pointer;
    padding: 0px 0px 0px 6px;
    border-radius: 5px;
    &:active {
      background-color: #F0F0F0;
    }
    &:hover .icon-wrapper {
      color: #31AE54;
    }
  }
  .active {
    color: #31AE54;
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
  }
  .btn-description {
    padding-top: 5px;
    padding-right: 15px;
  }
  .icon-wrapper {
    width: 16px;
    &--min {
      width: 13px;
    }
    margin: 5px;
  }
  .middle, .end {
    border-radius: 0px;
    border-right: 1px solid rgba(0, 0, 0, 10%);
    border-left: 1px solid rgba(0, 0, 0, 10%);
    min-width: 35px;
    height: 100%;
    text-align: center;
    padding: 2px 5px;
  }
  .end {
    border-right: none;
  }
</style>
