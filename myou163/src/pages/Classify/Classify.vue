<template>
  <div>
    <div class="searchCount">
      <Search></Search>
    </div>
    <div class="type-content">
      <header>
        <div class="inner">
          <div class="list">
            <div class="list-container">
              <div class="tab" v-for="(item,index) in category.category" :key="index" :class="{active:index===isActive}" @click="changeActive(index)">
                <router-link :to="/classify/+`${item.id}`">
                  <span class="txt">{{item.name}}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <router-view v-if="isRouterAlive" :key="key"></router-view>
    </div>
  </div>
</template>

<script>
  import Search from '../../components/Search/Search'
  import BScroll from 'better-scroll'

  import {mapState} from 'vuex'

  export default {
    name: "Classify",
    data(){
      return{
        isActive:0,
        isRouterAlive:true
      }
    },
    mounted(){
      this.$store.dispatch('getcategory',()=>{
        this.$nextTick(()=>{
          this._initScroll()
        })
      })
    },
    components:{
      Search,
    },
    computed: {
      ...mapState(['category']),
      key() {
        return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
      }
    },
    methods:{
      _initScroll(){
        new BScroll('.inner',{
          click: true
        })
      },
      changeActive(index){
        this.isActive = index;
        this.isRouterAlive=false;
        this.$nextTick(()=>{
          this.isRouterAlive=true
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .searchCount{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    height: 1.17333rem;
    padding: 0 .4rem;
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #d9d9d9;
    .ipt{
      width: 100%
    }
  }
  .type-content {
    width: 100%;
    overflow: hidden;
    display: flex;
    font-size .37333rem
    header {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-flow: row nowrap;
      -moz-flex-flow: row nowrap;
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      background-color: #fff;
      width: 3.16rem;
      height: 15.3rem;
      border-right: 1px solid #d9d9d9;
      position: relative;

      .inner {
        display: block;
        width 100%
      }
      .inner .list {
        width: 100%;
        display: flex;
        justify-content: space-around;
      }

      .list-container {
        width 100%
        display: block;
        z-index: 10000;
        padding: 0;
        .tab {
          width: 100%;
          height: .66667rem;
          text-align: center;
          margin-top: .53333rem
          border: none;
          .txt{
            display: block;
            color: #333;
            font-size: .37333rem;
            line-height: .66667rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .tab.active {
          margin .53333rem auto
          .txt{
            color: #ab2b2b
            font-size 0.45rem
            position relative
          }
        }
        .tab.active .txt:before {
          content: ' ';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: .08rem;
          background-color: #ab2b2b;
        }
      }
    }
  }

</style>

