<template>
  <ul class="loader">
    <li class="loader-item"></li>
    <li class="loader-item"></li>
    <li class="loader-item"></li>
  </ul>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
}
.loader-item {
  background: #EAEAEA;
  border-radius: 4px;
  height: 30px;
  width: 100%;
  position: relative;
  overflow: hidden;
  &:not(:first-child) {
    margin-top: 10px;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, #f9f9f9 50%, transparent 100%);
    animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }

  @keyframes load {
    from {
        left: -75px;
    }
    to   {
        left: 100%;
    }
}
}
</style>
