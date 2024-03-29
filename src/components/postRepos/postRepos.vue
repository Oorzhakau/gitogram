<template>
  <div class="c-post">
      <div class="post__card">
        <publication
          :publication="data"
        />
      </div>
  </div>
</template>

<script>
import { publication } from '../publication'
export default {
  name: 'post',
  components: {
    publication
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
<style lang="scss" scoped>
  .c-post{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 24px;
  }
  .post__user{
      margin-bottom: 16px;
  }
  .post__card{
      margin-bottom: 18px;
  }
</style>
