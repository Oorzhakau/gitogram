<template>
  <div class="profile__content">
    <img :src="avatar" class="avatar">
    <div class="profile__data">
      <div class="profile__login">{{ login }}</div>
      <div class="analytics">
        <div class="analytics__data">
          <router-link :to="{name: 'repos'}">
            <span class="analytics__numbers">{{ repos }}</span>
            <span class="analytics__link">reposts</span>
          </router-link>
        </div>
        <div class="analytics__data">
          <router-link :to="{name: 'following'}">
            <span class="analytics__numbers">{{ following }}</span>
            <span class="analytics__link active">watchers</span>
          </router-link>
        </div>
      </div>
      <div class="profile__name">{{ username }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String
    },
    login: {
      type: String
    },
    repos: {
      type: String
    },
    following: {
      type: String
    },
    username: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.profile__content{
  width: 349px;
  display: flex;
}
.avatar{
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.profile__data{
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.profile__login{
  color: #262626;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 6px;
}
.analytics__numbers{
  color: #262626;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5em;
  letter-spacing: -0.3px;
  margin-right: 4px;
}
.analytics__link{
  color: #404040;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.1px;
  &.active{
      color: #31AE54;
      text-decoration-line: underline;
      cursor: pointer;
  }
}
.profile__name{
  width: 239px;
  color: #9E9E9E;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2em;
}
.analytics{
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
</style>
