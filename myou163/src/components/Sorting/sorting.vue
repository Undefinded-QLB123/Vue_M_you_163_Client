<template>
  <div>
    <nav class="msite_nav">
      <div class="swiper-container swiper2" v-if="kingKongModule.msite" > <!--等getkingKongModule有数据再读取-->
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(kingKongModule,index) in getkingKongModuleArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index) in kingKongModule" :key="index">
              <div class="food_container">
                <img :src="c.url">
              </div>
              <span>{{c.name}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  export default {
    name: "sorting",
    data(){
      return{
        }
    },
    mounted() {
      this.$store.dispatch('getkingKongModule');
    },
    computed: {
      ...mapState(['kingKongModule']),
      getkingKongModuleArr() {
        const {kingKongModule} = this;
        console.log(kingKongModule);
        const bigArr = [];
        let smallArr = [];
        const msite = kingKongModule.msite;
        msite.forEach((t) => {
          if (smallArr.length === 0) {
            bigArr.push(smallArr)
          }
          smallArr.push(t);
          if (smallArr.length >= 10) {
            smallArr = []
          }
        });
        return bigArr
      }
    },
    watch:{
      kingKongModule(){
        this.$nextTick(() => {
          new Swiper('.swiper2', {
            pagination: {
              el: '.swiper-pagination',
            },
/*
            loop: true,
*/
          });
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .msite_nav
    width: 100%;
    height: 5.22667rem;
    background-image url("http://yanxuan.nosdn.127.net/56cd3b1e32f4d2edd03915efcef04de0.png")
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 20%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0

              img
                display inline-block
                width 50px
                height 50px

            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666

      .swiper-pagination
        display none
        > span.swiper-pagination-bullet-active
          background #02a774
</style>
