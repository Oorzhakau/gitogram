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
      required: true
    },
    forkCount: {
      type: String,
      required: true
    },
    activeStar: {
      type: Boolean,
      required: true
    },
    activeFork: {
      type: Boolean,
      required: true
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
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 10%);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  button {
    height: 28px;
    background-color: #FAFBFC;
    cursor: pointer;
    padding: 0px 0px 0px 6px;
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
    border-right: 1px solid rgba(0, 0, 0, 10%);
    border-left: 1px solid rgba(0, 0, 0, 10%);
    min-width: 35px;
    height: 100%;
    text-align: center;
    padding: 0px 5px;
  }
  .end {
    border-right: none;
  }
</style>
