<template>
  <div class="c-feed">
    <div class="user-info">
      <router-link :to="{name: 'user', params: {id: publication.owner.id}}">
        <user-info
          :username="publication.owner.login"
          :avatar="publication.owner.avatar_url"
          :id="publication.owner.id"
        />
      </router-link>
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
          v-for="pub in publication.issues?.data" :key="pub.id"
        >
            <comment
              :username="pub.user.login"
              :userId="pub.user.id"
              :text="pub.body"
            />
        </li>
      </ul>
    </div>
    <div class="date">{{ fomateDate(publication.created_at) }}</div>
  </div>
</template>

<script>
import { comment } from '../comment'
import { toggler } from '../toggler'
import { userInfo } from '../userInfo'
import * as api from '../../api'

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
      if (this.shown && !this.publication.issues) {
        this.$emit('loadIssues')
        console.log('loadIssues')
      }
    },
    fomateDate (date) {
      return api.helpers.formatDate(date)
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
