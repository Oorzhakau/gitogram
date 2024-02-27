<template>
  <div class="c-topline">
    <div class="x-container">
      <div class="headline">
        <slot name="headline"></slot>
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-topline {
  background: #FAFAFA;
  border-bottom: 1px solid #C6C6C8;
  padding: 42px 0 32px;
  width: 100%;
}

.content {
  margin-top: 37px;
}
</style>
