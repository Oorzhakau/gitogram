<template>
  <div class="place-img">
  </div>
  <ul>
    <li v-for="n in paragraphs" :key="n">
      <div class="paragraph"></div>
      <div class="paragraph"></div>
      <div class="paragraph"></div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'placeholder',
  props: {
    paragraphs: {
      type: Number,
      default: 1,
      validator (value) {
        return value > 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 .place-img {
    height: 170px;
    background-color: var(--hightlightGrey);
    border-radius: 5px;
    margin-bottom: 5px;
 }
 .paragraph {
    width: 80%;
    height: 18px;
    background-color: var(--hightlightGrey);
    border-radius: 5px;
    margin-bottom: 10px;
    &:first-child {
      width: 70%;
      margin-top: 10px;
    }
    &:last-child {
      width: 60%;
      margin-bottom: 0px;
    }
 }
</style>
