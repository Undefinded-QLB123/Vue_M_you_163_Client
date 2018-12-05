<template>
  <div class="content">
    <swipwe-com></swipwe-com>
    <warm-prompt></warm-prompt>
    <sorting></sorting>
  </div>
</template>

<script>
  import swipweCom from '../../../components/Swiper/Swiper'
  import WarmPrompt from '../../../components/WarmPrompt/WarmPrompt'
  import sorting from '../../../components/Sorting/sorting'
  export default {
    name: "Recommend",
    components:{
      swipweCom,
      WarmPrompt,
      sorting
    }
  }
</script>

<style scoped>

</style>
