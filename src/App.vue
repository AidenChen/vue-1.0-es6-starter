<template>
  <div>
    <v-header></v-header>
    <div>Body of 'App' module.</div>
    <router-view keep-alive></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header'

  export default {
    components: {
      'v-header': header
    }
  }
</script>

<style lang="scss">
</style>
