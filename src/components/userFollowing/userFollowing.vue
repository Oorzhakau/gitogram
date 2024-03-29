<template>
  <div class="following__content">
      <div class="following__data">
          <img class="avatar" :src="avatar">
          <div class="following__info">
              <div class="following__login">{{ login }}</div>
              <div class="following__status"> {{ status }} </div>
          </div>
      </div>
      <div class="following__button">
        <xbutton>following</xbutton>
      </div>
  </div>
</template>

<script>
import { xButton as xbutton } from '../../components/button'
export default {
  components: {
    xbutton
  },
  props: {
    login: {
      type: String
    },
    status: {
      type: String
    },
    avatar: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.following__content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.following__data{
  display: flex;
  gap: 19px;
  margin-right: 433px;
}
.avatar{
  width: 72px;
  height: 72px;
  border-radius: 50%;
}
.following__info{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.following__login{
  color: #262626;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.1px;
}
.following__status{
  color: #9E9E9E;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3em;
}
.c-button{
    display: inline-flex;
    padding: 10px 20px;
    align-items: flex-start;
    gap: 10px;
}
</style>
