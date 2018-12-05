<template>
  <div class="header-container">
    <div class="line">
      <router-link to="/" class="logo"></router-link>
      <Search></Search>
      <router-link to="/login" class="loginBtn">登录</router-link>
    </div>
    <line-tabs :headertabList="headertabList" class="lineTabs"></line-tabs>
    <div class="Toolbox">
      <div class="toggleWrap" @click="toggleActive">
        <div class="linear"></div>
        <div class="toggle">
          <div class="icon" :class="{toggleActive:isShow}"></div>
        </div>
      </div>
      <div class="tabWrap" v-show="isShow">
        <div class="tabAlter">全部频道</div>
        <div class="moreCate">
          <div class="cateTag" v-for="(item,index) in headertabList" :key="index"
               :class="{'cateTag-active': item.isActive}">{{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="isShow"></div>
  </div>
</template>

<script>
  import Search from '../../components/Search/Search'
  import LineTabs from '../../components/LineTabs/LineTabs'
  import {mapState} from 'vuex'
  export default {
    name: "TopHeader",
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      toggleActive(){
        this.isShow=!this.isShow
      }
    },
    computed:{
      ...mapState(['headertabList'])
    },
    components: {
      Search,
      LineTabs
    },

  }
</script>

<style scoped lang="stylus">
  .header-container {
    background-color: #fff;
  }

  .line {
    display: flex;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    padding: .21333rem .4rem;
  }

  .line .logo {
    width: 1.84rem;
    height: .53333rem;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
    display: inline-block;
    margin-right: .26667rem;
    background-size: cover;
    background-position: center;
  }
  .loginBtn{
    width: .98667rem;
    height: .53333rem;
    line-height: .53333rem;
    text-align: center;
    color: #b4282d;
    border: 1px solid #b4282d;
    border-radius: .10667rem;
    margin-left: .21333rem;
    font-size: 0.24rem;
  }

  .lineTabs{
    position: relative;
    z-index: 2;
    background: #fff;
    margin-top: -.01333rem;
  }
  .Toolbox{
    position relative
    top -0.84rem
    z-index 11
    .toggleWrap {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 0;
      -webkit-flex-grow: 0;
      -moz-flex-grow: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      -moz-justify-content: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      z-index 15
      .linear {
        width: .8rem;
        height: .8rem;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%);
        display inline-block
      }
      .toggle {
        width: 1.03333rem;
        height: .8rem;
        text-align: center;
        background: #fff;
        .icon {
          margin-top: .25rem;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .4rem;
          height: .4rem;
          -webkit-transition: -webkit-transform .5s;
          -moz-transition: -moz-transform .5s;
          -o-transition: -o-transform .5s;
          transition: -webkit-transform .5s;
          transition: transform .5s;
          transition: transform .5s, -webkit-transform .5s;
          &.toggleActive{
            transform: rotate(180deg);
          }
        }
      }
    }

    .tabWrap {
      position: absolute;
      z-index: 2;
      background: #fff;
      margin-top: -.01333rem;
      width 100%
      .tabAlter {
        width 100%
        display block
        height: .8rem;
        line-height: .8rem;
        padding-left: .4rem;
        font-size: .37333rem;
        position relative
        top: 0
      }
      .moreCate{
        position relative
        top 0.45rem
        width 100%
        .cateTag{
          width: 2rem;
          height: .74667rem;
          line-height: .74667rem;
          text-align: center;
          float: left;
          margin-bottom: .53333rem;
          margin-left: .4rem;
          background: #FAFAFA;
          border: 1px solid #CCC;
          border-radius: .05333rem;
          &.cateTag-active{
            border: 1px solid #b4282d;
            color: #b4282d;
          }
        }
      }
    }
  }

  .mask {
    position: fixed;
    z-index: 10;
    background: rgba(0, 0, 0, .5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
