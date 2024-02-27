<template>
  <div class="publication">
    <div class="description">
      <h2 class="title"> {{ publication.title }}</h2>
      <p>
        <span> {{ publication.language }}</span>
        {{ publication.description }}
      </p>
    </div>
    <div class="stars-forks">
      <stars-forks
        @updateStar="toggleStar"
        @updateFork="toggleFork"
        :starCount="publication.stars"
        :forkCount="publication.forks"
        :activeStar="publication.activeStar"
        :activeFork="publication.activeFork"
      />
    </div>
  </div>
</template>

<script>
import { starsForks } from '../starsForks'

export default {
  name: 'publication',
  props: {
    publication: {
      type: Object,
      required: true
    }
  },
  components: {
    starsForks
  },
  methods: {
    toggleStar () {
      this.$emit('updateStar')
    },
    toggleFork () {
      this.$emit('updateFork')
    }
  }
}
</script>

<style lang="scss" scoped>
  .publication {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 980px;
    border-radius: 10px;
    padding: 15px 20px;
    background-color: #FFFF;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  .title {
    font-size: 28px;
    font-weight: bold;
  }
  span {
    font-weight: bold;
  }
  .description {
    margin-bottom: 30px;
  }
  .stars-forks {
    margin-bottom: 10px;
  }
</style>
