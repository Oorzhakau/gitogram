<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul class="stories" ref="stories">
        <li class="stories-item" v-for="(trending, idx) in trendings.data.items" :key="trending.id">
          <x-slide
           :data="getStoryData(trending)"
           :active="slideNdx == idx"
           :loading="slideNdx == idx && loading"
           :btnsShown="activeBtns"
           @onNextSlide="handleSlide(idx + 1)"
           @onPrevSlide="handleSlide(idx - 1)"
           @onProgressFinish="handleSlide(idx + 1)"
           @onFollow="starRepo"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { xSlide } from '../slide'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'storiesSlider',
  components: {
    xSlide
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings
    }),
    activeBtns () {
      if (!this.btnsShown) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === (this.trendings.data.items.length - 1)) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadMe: 'trendings/fetchReadMe',
      starRepo: 'trendings/starRepo'
    }),
    async fetchReadMeForActiveSlide () {
      const { id, owner, name } = this.trendings?.data?.items[this.slideNdx]
      await this.fetchReadMe({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userId: obj.owner?.id,
        avatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
        following: obj.following
      }
    },
    moveSlider (slideNdx) {
      const slider = this.$refs.stories
      const slideWidth = parseInt(
        getComputedStyle(slider).getPropertyValue('width')
      ) / 10
      this.sliderPosition = (slideNdx * slideWidth * -1) % (slideWidth * 10)
      this.slideNdx = slideNdx % 10
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadMe () {
      this.loading = true
      this.btnsShown = false
      try {
        await this.fetchReadMeForActiveSlide()
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadMe()
    }
  },
  async mounted () {
    try {
      if (this.initialSlide) {
        const ndx = this.trendings.data.items.findIndex(item => item.id === this.initialSlide)
        await this.handleSlide(ndx)
      }
      await this.fetchTrendings()
      await this.loadReadMe()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-stories-slider {
  width: 100%;
  height: 100%;
  background: black;
  align-items: center;
  display: flex;
}
.stories-container {
  width: 100%;
  max-height: 660px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.stories {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  margin-left: -188px;
  transition: .4s;
}
</style>
