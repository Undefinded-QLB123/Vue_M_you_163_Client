<template>
  <div>
    <div class="searchCount">
      <Search></Search>
    </div>
    <div class="type-content">
      <line-tabs :headertabList="category.category" class="type-tabs"></line-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Search from '../../components/Search/Search'
  import LineTabs from '../../components/LineTabs/LineTabs'

  import {mapState} from 'vuex'

  export default {
    name: "Classify",
    mounted(){
      this.$store.dispatch('getcategory')
    },
    components:{
      Search,
      LineTabs
    },
    computed: {
      ...mapState(['category'])
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
    display: flex;

    header.type-tabs {
      width: 2.16rem;
      height: 15.3rem;
      border-right: 1px solid #d9d9d9;
    }

    .type-tabs >>>.list-container {
      display: block;
      z-index: 10000;
      padding: 0;
    }


    >>>.type-tabs >>>.list {
      overflow: scroll;
    }

    .type-tabs >>>.inner {
      display: block;
    }


    >>>header.type-tabs::after {
      display: none;
    }

    header.type-tabs >>>.tab.active .txt:after {
      content: ' ';
      position: absolute;
      left: -.64rem;
      bottom: 0;
      height: 100%;
      width: .05333rem;
      background-color: #b4282d;
    }

    header.type-tabs >>>.tab {
    }

    header.type-tabs >>> .tab {
      justify-content: flex-start;
      margin-top: .53333rem;
    }

    header >>> .tab:first-of-type {
      margin-left: 0.54rem;
    }

    >>> header.type-tabs .active {
      margin-left: .64rem;
    }
  }

</style>

