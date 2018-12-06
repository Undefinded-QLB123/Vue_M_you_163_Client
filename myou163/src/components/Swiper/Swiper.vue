<template>
    <div>
      <nav class="msite_nav">
        <div class="swiper-container swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
              <img :src="item.url">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: "Swiper",
    data(){
      return{
        bannerList: [
          {id: 0, url: 'https://yanxuan.nosdn.127.net/1d66a50452354fa28b045853c078cbe3.jpg?imageView&quality=75&thumbnail=750x0'},
          {id: 1, url: 'https://yanxuan.nosdn.127.net/fda101d5e6beeb56d0ff8245139ff30b.jpg?imageView&quality=75&thumbnail=750x0'},
          {id: 2, url: 'https://yanxuan.nosdn.127.net/03d8a81e7be4bb1a8d44dc2118f944a4.jpg?imageView&quality=75&thumbnail=750x0'},
          {id: 3, url: 'https://yanxuan.nosdn.127.net/e0c3e253dcfdb170bda823ac5b71247e.jpg?imageView&quality=75&thumbnail=750x0'},
          {id: 4, url: 'https://yanxuan.nosdn.127.net/089fdc9bfdc75ccfbe9c349d0096804b.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YTRhMmIzYmI1Y2I1YTc4ZGM5MmE3Nzk2NzAwYTFiNjgucG5n|imageView&quality=75&thumbnail=750x0'},
          {
            id: 5,
            url: 'https://yanxuan.nosdn.127.net/a209d8ec4efb502140d086773cd04c76.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YTRhMmIzYmI1Y2I1YTc4ZGM5MmE3Nzk2NzAwYTFiNjgucG5n|imageView&quality=75&thumbnail=750x0'
          },
          {
            id: 6,
            url: 'https://yanxuan.nosdn.127.net/5a2289149a59ca24ef2256674542e4cb.jpg?imageView&quality=75&thumbnail=750x0'
          },
          {
            id: 7,
            url: 'https://yanxuan.nosdn.127.net/850c005113e5becbfd98d797b8a2101a.jpg?imageView&quality=75&thumbnail=750x0'
          }
        ]
      }
    },
    mounted() {
      new Swiper('.swiper1', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: true,
      })
    }
  }
</script>

<style scoped lang="stylus">
  .swiper-container {
    width: 100%;
    height: 4.93333rem;
    img {
      width 100%
      height auto
    }
  }

</style>
