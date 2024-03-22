<template>
  <div class="auth">
    <div class="c-container">
      <div class="auth__content">
        <div class="auth__logo">
          <icon name="logo" />
        </div>
        <div class="auth__desc">
          <span class="auth-info-text">
            More than just one repository.
            <br>
            This is our digital world.
          </span>
        </div>
        <div class="auth-btn">
          <x-button @click="getCode" theme="green">
            <div class="auth-btn-content">
              <span>Authorize with github</span>
              <div class="btn-logo">
                <icon name="github" />
              </div>
            </div>
          </x-button>
        </div>
        <div class="auth-back">
          <icon name="authLogo" />
        </div>
      </div>
    </div>
    <footer class="auth__footer">
      <div class="footer__text">© Gitogram from Loftschool</div>
    </footer>
  </div>
</template>

<script>
import { xButton } from '../../components/button'
import { icon } from '../../icons'
import * as api from '../../api'

export default {
  name: 'auth',
  components: {
    xButton,
    icon
  },
  methods: {
    async getCode () {
      try {
        api.auth.getCode()
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const reponse = await api.auth.getAuthToken(code)
        const token = reponse.data.token
        localStorage.setItem('token', token)
        this.$router.replace({ name: 'feeds' })
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../../assets/auth.png") center right -10% / 40% no-repeat;
}
.c-container {
  max-width: 1200px;
  padding: 0 10px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.auth {
  &-btn {
    width: 250px;
  }
  &__logo {
    width: 200px;
    margin-bottom: 25px;
    color: black;
  }
  &__desc {
    max-width: 256px;
    font-size: 18px;
    color: #6f6f6f;
    margin-bottom: 55px;
    line-height: 1.58;
  }
  &__footer {
    border-top: 1px solid #a7a7a7;
    color: #a7a7a7;
    background-color: #fcfcfc;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 32px 0;
    position: absolute;
    bottom: 0;
    font-size: 16px;
  }
}
.auth-btn-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-logo {
  margin-left: 5px;
  width: 24px;
}
</style>
