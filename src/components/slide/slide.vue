<template>
  <div class="c-container">
    <div class="header">
      <div class="progress-wrapper">
        <x-progress></x-progress>
      </div>
      <div class="userinfo-wrapper">
        <userInfo
          :username="user.username"
          :avatar="user.avatar"
          :id="user.id"
        />
      </div>
    </div>
    <div class="content">
      <div class="img">
        <img class="pic" :src="img" alt="slide image">
      </div>
      <slot name="content"></slot>
    </div>
    <div class="button-wrapper">
      <x-button :active="follow"/>
    </div>
  </div>
</template>

<script>
import { xProgress } from '../progress'
import { userInfo } from '../userInfo'
import { xButton } from '../button'

export default {
  name: 'xSlide',
  components: {
    xProgress,
    userInfo,
    xButton
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    follow: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.c-container {
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    background: #fff;
    overflow: auto
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
  width: 270px;
  padding-top: 30px;
  margin: 0 auto;
}

.content {
    flex: 1;
    width: 330px;
    margin: 0 auto;
    max-height: 600px;
    overflow-y: auto;
}

.content::-webkit-scrollbar {
  width: 5px;
}

.content::-webkit-scrollbar-thumb {
  background-color: #888; /* Цвет ползунка полосы прокрутки */
}

.content::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Цвет фона полосы прокрутки */
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
</style>
