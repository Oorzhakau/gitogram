<template>
  <div class="c-issues">
    <div class="toggler">
      <toggler @onToggle="handlerToggle"/>
    </div>
    <div class="content-loader" v-if="loading">
      <loader />
    </div>
    <div class="comments-container" v-if="issues?.length && opened">
      <ul class="comments">
        <li class="comments-item" v-for="issue in issues" :key="issue.id">
          <comment :username="issue.user.login" :userId="issue.user.id" :text="issue.body"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { toggler } from '../toggler'
import { loader } from '../loader'
import { comment } from '../comment'

export default {
  components: {
    toggler, loader, comment
  },
  emits: ['loadContent'],
  props: {
    loading: {
      type: Boolean
    },
    issues: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      opened: false
    }
  },
  methods: {
    handlerToggle (isOpened) {
      this.opened = isOpened

      if (isOpened && this.issues.length === 0) {
        this.$emit('loadContent', this.opened)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comments-container {
  color: black;
  animation: comments 0.1s ease-in forwards;
  margin-bottom: 10px;
}
@keyframes comments-container {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
