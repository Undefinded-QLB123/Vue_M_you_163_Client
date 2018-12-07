<template>
    <div>
      <div class="header">
        <div class="iconfont icon-xiangyou" @click="$router.back()"></div>
        <mt-search
          v-model="value"
          :placeholder="SearchPlaceHolder[PlaceHolderRandom]"
          :result="recommendList"
          @keyup.enter="onEnter(event)"
        >
        </mt-search>
        <div class="history mb10" v-if="showHistory">
          <h4 class="hd">历史记录 <i class="iconfont icon-lajitong fr" @click="clearHistory()"></i></h4>
          <div class="bd">
            <router-link :to="{path:'/searchResult',query:{keyword:tag}}"
                         v-for="(tag,index) in this.$store.state.tagsHistory" :key="index"><span class="tag tag-hollow">{{tag}}</span>
            </router-link>
          </div>
        </div>
        <div class="history">
          <h3 class="hd">热门搜索</h3>
          <div class="bd">
            <router-link :to="{path:'/searchResult',query:{keyword:tag}}"
                         v-for="(tag,index) in this.$store.state.tagsHot" :key="index" class="hot-tag"><span
              class="tag tag-hollow">{{tag}}</span></router-link>
          </div>
        </div>
        <h1 v-show="errorMsg">请正确搜索内容</h1>
      </div>
    </div>
</template>

<script>
  import {reqSearchContent} from '../../api'
  export default {
    name: "SearchPage",
    data(){
      return{
        SearchPlaceHolder:['Coach制造商 精致皮包低至65折','女式超轻便携羽绒服 4折开天辟地价','严选双12 热销TOP100','网易智造mini暖风机 限时8折'],
        PlaceHolderRandom:0,
        value:'',
        recommendList:[],
        errorMsg:false,
      }
    },
    created(){
      this.randomInt(0,3)
    },
    methods:{
      randomInt(from, to) {
        this.PlaceHolderRandom =  parseInt(Math.random() * (to - from + 1) + from) ;
      },
      //发送搜索请求
      async Search(){
        const {value} = this;
        const love = `keywordPrefix=${value}`;
        let result;
        result = await reqSearchContent(love);
        if(result.code==='200'){
          this.recommendList = result.data
        }else {
          this.errorMsg=true
        }
      },
      onEnter(event){
        console.log('---');
        this.recommendList = [];
        if (event.key === 'Enter') {
          if (this.$store.state.tagsHistory.indexOf(this.value.trim()) === -1) {
            this.$store.state.tagsHistory.unshift(this.value.trim())
          }
        } else {
          if (this.$store.state.tagsHistory.indexOf(event.target.innerText) === -1) {
            this.$store.state.tagsHistory.unshift(event.target.innerText)
          }
          this.recommendList = [];
        }
        this.$router.push({path: '/searchResult'})
      }
    },
    computed:{
      showHistory() {
        return !(this.$store.state.tagsHistory.length === 0)
      }
    },
    watch:{
      value(val, oldVal){
        console.log(val, oldVal);
        this.Search()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .header{
    .iconfont{
      width 0.6rem
      height 1.16rem
      background-color #fff
      z-index 10
      &.icon-xiangyou{
        position absolute
        transform rotateZ(180deg)
        &::before{
          position relative
          left: 0
          right: 0;
          top: 13px
          bottom: 0
        }
      }
    }
    .mint-search{
      right 0
      position relative
      height: 1rem
      >>>.mint-searchbar {
        padding 0
        margin 0 0.9rem
        background-color: #fff;
        position absolute
        top: 10px
        right: 0
        left: 0
        z-index 10
        .mint-searchbar-inner{
          padding-top: 0;
          padding-left: .26667rem;
          padding-bottom: 0;
          border: 0;
          background-color: #f4f4f4;
          height: .74667rem;
          border-radius: 4px;
          input{
            background-color: #f4f4f4;
            font-size 14px
          }
          .mintui-search{
            color #a7a7a7
            font-size 18px
            &::before{
              margin-right: .21333rem;
            }
          }
        }
        .mint-searchbar-cancel{
          font-size: .37333rem;
          color: #333
        }
      }
      >>>.mint-search-list{
        position fixed
      }
    }

    .history{
      background-color: #fff;
      padding-left: 0.5rem;
      font-size .37333rem
      .hd{
        color: #999;
        height: 1.9rem;
        line-height: 1.9rem;
        padding-right: 0.5rem;
      }

      .bd {
        .tag {
          display: inline-block;
          font-size: 0.35rem;
          border-radius: 2px;
          line-height: normal;
          padding: 1px 0.2rem;
          text-align: center;
          margin: 0 0.25rem 0.25rem 0;
        }

        .tag-hollow {
          padding: 4px 6px;
          border-radius: 2px;
          margin: 0 0.45rem 0.35rem 0;
          border: 1px solid #b4a078;
          color: #b4a078;
        }

        .hot-tag:nth-child(-n + 4) .tag-hollow {
          border-color: #b4282d;
          color: #b4282d;
        }
      }
    }
  }
</style>
