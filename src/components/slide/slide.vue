<template>
  <div class="c-container">
    <div class="stories-container" :class="{ active }">
      <div class="header">
        <div class="progress-wrapper">
          <x-progress :active="active" @onFinish="$emit('onProgressFinish')"/>
        </div>
        <div class="userinfo-wrapper">
          <userInfo
            :username="data.username"
            :avatar="data.avatar"
            :id="data.userId"
          />
        </div>
      </div>
      <div class="content">
        <div class="loader" v-if="loading">
          <spinner/>
        </div>
        <div class="info" v-else>
          <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
          <placeholder v-else :paragraphs="2"/>
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button-size">
          <x-button :active="follow"/>
        </div>
      </div>
    </div>
    <template v-if="active">
      <button
        v-if="btnsShown.includes('next')"
        class="btn btn-next"
        @click="$emit('onNextSlide')"
      >
        <div class="icon">
          <icon name="arrow"/>
        </div>
      </button>
      <button
        v-if="btnsShown.includes('prev')"
        class="btn btn-prev"
        @click="$emit('onPrevSlide')"
      >
        <div class="icon">
          <icon name="arrow"/>
        </div>
      </button>
    </template>
  </div>
</template>

<script>
import { xProgress } from '../progress'
import { userInfo } from '../userInfo'
import { xButton } from '../button'
import { spinner } from '../spinner'
import { placeholder } from '../placeholder'
import { icon } from '../../icons'

export default {
  name: 'xSlide',
  components: {
    xProgress,
    userInfo,
    xButton,
    spinner,
    placeholder,
    icon
  },
  emits: ['onNextSlide', 'onPrevSlide', 'onProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    follow: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      require: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>

.c-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.stories-container {
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    background: #fff;
    transform: scale(0.8);
    .button-size {
      width: 220px;
      margin: auto;
    }
    &.active {
      transform: scale(1);
      .button-size {
        width: 270px;
      }
    }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  margin: 0 auto;
  max-height: 600px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  &-text {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
}

.loader {
  width: 50px;
  height: 50px;
}

.info {
  width: 100%;
  height: 100%;
}

.progress-wrapper {
    width: 100%;
}

.header {
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.button-wrapper {
  height: 100px;
  width: 100%;
  border-top: 1px solid var(--lightGrey);
  padding: 0;
  padding-top: 30px;
}

.img {
    width: 294px;
    height: 204px;
    margin: 0 auto;
}

.pic {
    width: 100%;
    height: 100%;
}

.btn {
  width: 37px;
  height: 37px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: white;
  color: var(--grey);
  position: absolute;
  top: 45%;
  z-index: var(--z-active-slide);
  &:hover {
    color: var(--green);
  }
  &-next {
    left: 412px;
    transform: translate(-50%, -50%);
  }
  &-prev {
    left: -40px;
    transform: translate(-50%, -50%) rotate(180deg);
  }
}

.icon {
  width: 25px;
  height: 25px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

</style>
