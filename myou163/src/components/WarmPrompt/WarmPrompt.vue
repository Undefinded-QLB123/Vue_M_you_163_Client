<template>
  <div class="promise">
    <div class="grid-content bg-purple">
      <i class="u-icon u-icon-servicePolicy-index"
         style="background-image:url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png);"></i>
      <span class="text">网易自营品牌</span>
    </div>
    <div class="grid-content bg-purple">
      <i class="u-icon u-icon-servicePolicy-index"
         style="background-image:url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png);"></i>
      <span class="text">30天无忧退货</span>
    </div>
    <div class="grid-content bg-purple">
      <i class="u-icon u-icon-servicePolicy-index"
         style="background-image:url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png);"></i>
      <span class="text">48小时退款</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WarmPrompt"
  }
</script>

<style scoped lang="stylus">
  .promise {
    width: 100%;
    height: .96rem;
    display: flex;
    background: #FFEDDB;
    justify-content: space-around;
    align-items: center;
/*
    margin-bottom: .16667rem;
*/
  }

  .grid-content {
    display: flex;
    align-items: center;
  }

  .grid-content span {
    display: inline-block;
  }
  .u-icon-servicePolicy-index{
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .42667rem;
    height: .42667rem;
  }
</style>
