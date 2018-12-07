<template>
  <header class="topbar">
    <div class="flex isFixed">
      <router-link to="/msite" class="key"><i class="iconfont icon-home"></i></router-link>
      <router-link to="/msite" class="info">
        <h1 class="logo" v-show="$route.path==='/login'" :style="logoImg"></h1>
        <div class="text" v-show="$route.path==='/distinguish'" style="margin-top: 0.1rem">
          <span style="font-size: .5rem;color: #b4282d;font-weight: bold;">发现</span>
          <a style="margin-left: 0.2rem">甄选家</a>
        </div>
      </router-link>
      <router-link to="/search" class="search"><i class="iconfont icon-search"></i></router-link>
      <router-link to="/shoppingcart" class="cart">
        <i class="iconfont icon-cart"></i>
        <span class="icon-num" v-if="cartGoodsNumber !== 0">{{cartGoodsNumber}}</span>
      </router-link>
    </div>
  </header>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data(){
      return{
        isShow:'',
        logoImg:"background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png)"
      }
    },
    computed: {
      ...mapGetters(['cartGoodsNumber'])
    }
  }
</script>


<style scoped lang="stylus">
  .topbar{
    position: relative;
    height: 1.16rem;
    background-color: #fafafa;
    .flex{
      z-index: 1;
      margin: auto;
      overflow: hidden;
      position: relative;
      padding: 0 .21333rem 0 .32rem;
      height: 1.17333rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      -webkit-justify-content: space-between;
      -moz-justify-content: space-between;
      justify-content: space-between;
      .iconfont{
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
        background-repeat: no-repeat;
        background-size: 2.29333rem 5.6rem;
      }
      .key{
          .icon-home{
            width: .64rem;
            height: .58667rem;
            background-position: 0 -.98667rem;
          }
      }

      .info{
        width: 2.29333rem;
        height: .72rem;
        background-position: 0 -1.70667rem;
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        .logo{
          width: 2.29333rem;
          height: .72rem;
          background-position: 0 -1.70667rem;
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          background-size: 2.29333rem 5.6rem;
        }
      }
      .search{
        position relative
        left 3rem
        .icon-search {
          margin-left: auto;
          margin-right: .26667rem;
          width: .85333rem;
          height: .85333rem;
          background-position: 0 -4.74667rem;
        }
      }

      .cart{
        left 3rem
        .icon-cart {
          margin-left: auto;
          margin-right: .26667rem;
          width: .85333rem;
          height: .85333rem;
          background-position: 0 0;
        }
      }

    }
  }
</style>
