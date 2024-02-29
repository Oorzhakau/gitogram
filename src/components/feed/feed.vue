<template>
  <div class="c-feed">
    <div class="user-info">
      <user-info
        :username="publication.author.username"
        :avatar="publication.author.avatar"
        :id="publication.author.id"
      />
    </div>
    <div class="content" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
    <div class="toggle">
      <toggler @onToggle="handlerToggle"/>
    </div>
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item"
          v-for="pub in publication.comments" :key="pub.id"
        >
            <comment
              :username="pub.author.username"
              :text="pub.text"
            />
        </li>
      </ul>
    </div>
    <div class="date">{{ publication.date }}</div>
  </div>
</template>

<script>
import { comment } from '../comment'
import { toggler } from '../toggler'
import { userInfo } from '../userInfo'

export default {
  name: 'feed-item',
  props: {
    publication: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      shown: false
    }
  },
  components: {
    toggler,
    comment,
    userInfo
  },
  emits: ['homePage', 'signOut'],
  methods: {
    onPress (id) {
      this.$emit('onPress')
    },
    handlerToggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped>
.c-feed {
  padding: 0 0 24px 0;
  text-align: left;
}
.toggle {
  margin-bottom: 10px;
}
.content {
  margin-top: 15px;
  margin-bottom: 12px;
}
.comments {
  color: black;
  animation: comments 0.1s ease-in forwards;
  margin-bottom: 10px;
}

@keyframes comments {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
