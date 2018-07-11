<template>
  <h1>{{msg}}</h1>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: "Hello demo15 VUE"
    }
  },
  mounted() {
    console.log("mounted")
  }
}
</script>
