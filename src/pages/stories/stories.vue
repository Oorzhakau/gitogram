<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo" @click="goTofeed">
          <icon name="logo" alt="Logo" class="logo__white"/>
        </button>
        <button class="close-btn" @click="goBack">
          <icon name="close" alt="Close" class="logo__white"/>
        </button>
      </div>
    </header>
    <div class="content">
      <stories-slider :initialSlide="Number($route.params.initialSlide)"/>
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { storiesSlider } from '../../components/storiesSlider'

export default {
  name: 'stories',
  components: {
    icon,
    storiesSlider
  },
  methods: {
    goTofeed () {
      this.$router.push({ name: 'feed' })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper {
  height: 100vh;
  width: 100wh;
  background: black;
  overflow: hidden;
}
.x-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center
}
.header {
  padding-top: 45px;
  position: fixed;
  display: flex;
  width: 100%;
}

.logo {
  width: 183px;
  height: 40px;
  icon {
    width: 100%;
    height: 100%;
  }
  &__white {
    color: white;
  }
}

.close-btn {
  width: 23px;
}

.content {
  height: 680px;
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center
}
</style>
