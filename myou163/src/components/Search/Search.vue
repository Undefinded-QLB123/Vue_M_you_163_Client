<template>
  <router-link to="/" class="m-topSearchIpt ipt">
    <i class="icon"></i>
    <span class="placeholder">
            <span>商品搜索, 共</span> <span>19913</span> <span>款好物</span>
          </span>
  </router-link>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style scoped lang="stylus">
  .ipt {
    width: 62%;
  }

  .m-topSearchIpt {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: .74667rem;
    font-size: .37333rem;
    background-color: #ededed;
    border-radius: .10667rem;
    text-decoration: none;
  }

  .m-topSearchIpt .icon {
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: .13333rem;
  }

  .m-topSearchIpt .icon {
    display: inline-block;
    width: .37333rem;
    height: .37333rem;
  }

  .m-topSearchIpt .placeholder {
    color: #666;
    text-decoration: none;
  }
</style>
