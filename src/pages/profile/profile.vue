<template>
  <h1>Profile user {{id}}</h1>
</template>

<script>
export default {
  name: 'profile',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
