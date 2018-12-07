<template>
  <div class="right">
    <div class="img" :style="{ backgroundImage: 'url(' + banner +')' }"></div>
    <div class="cateList" v-for="(item,index) in this.list" :key="index">
      <div class="hd">{{item.name}}</div>
      <ul class="list">
        <li class="cateItem" v-for="(list,index) in item.categoryList" :key="index">
          <a href="/">
            <img class="cateImgWrapper" :src="list.wapBannerUrl" alt="img">
            <span class="catename">{{list.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    name: "ClassifyList",
    data() {
      return {
        banner: '',
        id: this.$route.path.split('/')[2],
        data: {},
        list: {},
      }
    },
    created() {
      this.UpData(this.category)
    },
    computed: {
      ...mapState(['category']),

    },
    methods: {
      _initScroll() {
        new BScroll('.cateList', {
          click: true
        })
      },
      UpData(value) {
        if (value.category) {
          value.category.forEach((t) => {
            if (this.id == t.id) {
              this.data = t;
              this.list = t.subCateList;
            }
          })
        }
        this.banner = this.data.wapBannerUrl
      }
    },
    watch: {
      category(value) {
        if (value) {
          this.UpData(value);
        }
      },
    }
  }
</script>

<style scoped lang="stylus">
  .right {
    width: 100%
    height 15rem
    padding: .4rem .4rem .28rem;
    overflow scroll

    .img {
      position: relative;
      width: 100%;
      height: 2.56rem;
      display: table;
      margin-bottom: .42667rem;
      background: center no-repeat #f4f4f4;
      background-size: cover;
      border-radius: 4px;
    }

    .cateList {
      overflow hidden
      .hd{
        white-space: nowrap;
        max-width: 7.04rem;
        padding-bottom: .10667rem;
        margin-bottom: .32rem;
        text-align: left;
        font-size: .37333rem;
        font-weight: 700;
        border-bottom: 1px solid #d9d9d9;
      }
      .list {
        .cateItem {
          display: inline-block;
          margin-right: .35333rem;
          font-size: 0;
          width: 1.92rem;
          vertical-align: top;

          .cateImgWrapper {
            width: 1.92rem;
            height: 1.92rem;
          }

          .catename {
            height: .96rem;
            font-size: .32rem;
            text-align: center;
            line-height: .48rem;
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            color #333
          }
        }
      }
    }
  }
</style>
