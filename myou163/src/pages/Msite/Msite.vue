<template>
    <div>
      <top-header></top-header>
      <router-view></router-view>
    </div>
</template>

<script>
  import TopHeader from '../../components/TopHeader/TopHeader'
  export default {
    name: "Msite",
    components:{
      TopHeader
    }
  }
</script>

<style scoped>

</style>
