<template>
  <div>
    <div class="panel">
      <div class="panel-hd h36">
        <div class="isFixed">
          <h1>购物车</h1>
          <div class="right">
            <a class="cart-coupon" href="/">
              <span class="txt">领劵</span>
            </a>
          </div>
          <div class="panel-btn" v-if="cartGoodsNumber !== 0" @click="editorGoods($event)">编辑</div>
        </div>
      </div>
      <div class="panel-bd">
        <div class="notice" v-if="totalPrice >= 88"><span>已满足免邮条件</span></div>
        <ul class="service-policy" v-else>
          <li v-for="service in servicePolicy" :key="service"><i class="iconfont icon-quan"></i>{{service}}</li>
        </ul>
        <section v-if="cartGoodsNumber !== 0">
          <ul class="flex-list goods-list">
            <li v-for="(goods, index) in this.cartGoods" :key="index">
              <div class="key"><span class="checkbox" :checked="isShowEditor?editCheckedGoods[index]:goods.checked"
                                     @click="toggleChecked(goods,index)"><i class="iconfont icon-check"></i></span>
              </div>
              <div class="info nowrap">
                <router-link :to="{path:'/goodsDetail',query:{id:goods.supId}}"><img :src="goods.pic" alt="">
                </router-link>
                <div class="txt">
                  <h4>{{goods.name}}</h4>
                  <p class="des">{{goods.sku}}</p>
                  <div class="txtbtm">
                    <div class="count fr">
                      <span @click="countGoodsNumber(goods,false)" :class="{disabled: goods.num === 1}">-</span>
                      <input type="number" v-model="goods.num"/>
                      <span @click="countGoodsNumber(goods,true)">+</span>
                    </div>
                    <span>{{goods.price | priceFomat(goods.price)}}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <div class="nodata" v-else>
          <div class="nodataIcon">
            <div class="img"></div>
            <p>去添加点什么吧</p>
            <button class="login_submit" v-if="typeof token !== 'string'">
              <router-link to="/login" class="btn">登录</router-link>
            </button>
          </div>
        </div>
      </div>
      <div class="panel-ft" v-if="cartGoodsNumber !== 0">
        <div class="info">
          <span class="checkbox" :checked="isSelectedAll" @click="selectedAll(isSelectedAll)"><i
            class="iconfont icon-check"></i></span>
          <span>已选({{selectedNum}})</span>
          <span class="fr price" v-if="!isShowEditor">{{totalPrice | priceFomat(totalPrice)}}</span>
        </div>
        <div class="key" v-if="!isShowEditor">
          <span :class="[{'disabled': selectedNum <= 0},'btn btn-full']">下单</span>
        </div>
        <div class="key" v-else>
          <span :class="[{'disabled': selectedNum <= 0},'btn btn-full']" @click="deleteGoods()">删除所选</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import {Toast} from 'mint-ui'

  export default {
    name: 'ShoppingCart',
    data() {
      return {
        servicePolicy: ['30天无忧退货', '48小时快速退款', '满88元免邮费'],
        totalPrice: 0, // 商品总价格
        isSelectedAll: true, // 是否全选
        selectedNum: this.$store.getters.cartGoodsNumber, // 选中个数
        isShowEditor: false, // 是否显示编辑面板
        editCheckedGoods: {} // 编辑状态选中的商品
      }
    },
    // 过滤
    filters: {
      // 格式化价格
      priceFomat(price) {
        return '￥' + price.toFixed(2)
      }
    },
    created() {
      this.getAllGoodsPrice()
    },
    computed: {
      ...mapState(['cartGoods', 'token', 'username']),
      ...mapGetters(['cartGoodsNumber'])
    },
    methods: {
      // 商品数量加减
      countGoodsNumber(goods, flag) {
        if (flag) {
          goods.num++
        } else {
          if (goods.num <= 1) {
            Toast('本商品1件起售')
            goods.num = 1
            return
          }
          goods.num--
        }
        this.$store.dispatch('updateCart', this.cartGoods)
        this.getSelectedNumber()
        this.getAllGoodsPrice()
      },
      // 单个商品是否选中
      toggleChecked(goods, index) {
        if (!this.isShowEditor) {
          if (typeof goods.checked === 'undefined') {
            this.$set(goods, 'checked', true)
          } else {
            goods.checked = !goods.checked
          }
        } else {
          this.editCheckedGoods[index] = !this.editCheckedGoods[index]
          this.editCheckedGoods = {...this.editCheckedGoods}
        }
        this.hasSelectedAll()
        this.getSelectedNumber()
        this.getAllGoodsPrice()
      },
      // 计算已选中个数
      getSelectedNumber() {
        let selectedNum = 0
        if (!this.isShowEditor) {
          Object.values(this.cartGoods).forEach((value, index) => {
            if (value.checked) {
              selectedNum += value.num
            }
          })
        } else {
          Object.values(this.editCheckedGoods).forEach((value, index) => {
            if (value) {
              selectedNum += 1
            }
          })
        }
        this.selectedNum = selectedNum
      },
      // 计算所有商品价格
      getAllGoodsPrice() {
        let totalPrice = 0
        Object.values(this.cartGoods).forEach((value, index) => {
          if (value.checked) {
            totalPrice += value.price * value.num
          }
        })
        this.totalPrice = totalPrice
      },
      // 全选
      selectedAll(flag) {
        this.isSelectedAll = !flag
        if (!this.isShowEditor) {
          Object.values(this.cartGoods).forEach((value, index) => {
            if (typeof value.checked === 'undefined') {
              this.$set(value, 'checked', !flag)
            } else {
              value.checked = !flag
            }
          })
        } else {
          for (let i in this.editCheckedGoods) {
            this.editCheckedGoods[i] = !flag
          }
        }
        this.getSelectedNumber()
        this.getAllGoodsPrice()
      },
      // 判断是否全选
      hasSelectedAll() {
        let flag = true
        if (!this.isShowEditor) {
          Object.values(this.cartGoods).forEach((value, index) => {
            if (!value.checked) {
              flag = false
            }
          })
        } else {
          if (Object.values(this.editCheckedGoods).length === Object.values(this.cartGoods).length) {
            Object.values(this.editCheckedGoods).forEach((value, index) => {
              flag = flag && value
            })
          } else {
            flag = false
          }
        }
        this.isSelectedAll = flag
      },
      // 编辑商品
      editorGoods($event) {
        this.isShowEditor = !this.isShowEditor
        if (this.isShowEditor) {
          event.target.innerText = '完成'
          for (let i in this.cartGoods) {
            this.editCheckedGoods[i] = false
          }
        } else {
          event.target.innerText = '编辑'
        }
        this.hasSelectedAll()
        this.getSelectedNumber()
      },
      // 删除商品
      deleteGoods() {
        for (let i in this.editCheckedGoods) {
          if (this.editCheckedGoods[i]) {
            delete this.editCheckedGoods[i]
            delete this.cartGoods[i]
          }
        }
        this.editCheckedGoods = {...this.editCheckedGoods}
        this.$store.dispatch('updateCart', this.cartGoods)
        this.hasSelectedAll()
        this.getSelectedNumber()
        this.getAllGoodsPrice()
      }
    }
  }
</script>

<style scoped lang="stylus">

  .panel {
    .panel-hd {
      height: 1.17333rem;
      padding: 0 .4rem;
      line-height: 1.17333rem;
      text-align: center;
      background-color: #fff;
      position: relative;
      &.h36 {
        height: 1.17333rem;
      }
      .isFixed{
        display: inline-block;
        font-size: .48rem;
        .right{
          position: absolute;
          top: 0;
          right: .4rem;
          font-size: .4rem;
          .cart-coupon{
            position: relative;
            color: #B4282D;
          }
        }
      }
      .panel-btn {
        position absolute
        right .5rem
        top 0
      }
    }

    .panel-bd {
      .service-policy{
        position: relative;
        z-index: 1;
        height: .93333rem;
        padding: 0 .4rem;
        background: #f4f4f4;
        display: -moz-flex;
        display: flex;
        -webkit-flex-flow: row nowrap;
        -moz-flex-flow: row nowrap;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
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
        li{
          display: -moz-flex;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          -moz-align-items: center;
          align-items: center;
          font-size: .32rem;
          color: #666;
          .iconfont{
            margin-right: .18rem;
            position: relative;
            top: 0px;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png);
            background-repeat: no-repeat;
            background-size: 98%
            width: .13333rem;
            height: .13333rem;
          }
        }
      }
      .nodata{
        position: fixed;
        top: 1.17333rem;
        left: 0;
        bottom: 0;
        z-index: 0;
        width: 100%;
        background-color: #f4f4f4;
        text-align: center;
        .nodataIcon{
          position: absolute;
          top: -.66667rem;
          right: 0;
          bottom: 0;
          left: 0;
          height: 4rem;
          margin: auto;
          .img{
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
            display: inline-block;
            vertical-align: middle;
            width: 3.30667rem;
            height: 3.30667rem;
            margin-bottom: .10667rem;
            background-size: 3.30667rem 3.30667rem;
            background-position: center center;
            background-repeat: no-repeat;
          }
          p{
            font-size: .37333rem;
            line-height: 1;
            color: #7f7f7f;
            margin-bottom .66667rem
          }
          .login_submit{
            margin: auto;
            width: 6.4rem;
            height: 1.22667rem;
            font-size: .4rem;
            line-height: 1.22667rem;
            background-color: #b4282d;
            border-radius: .04rem;
            a{
              color #fff
            }
          }
        }
      }
    }

    .panel-ft {
      bottom 2rem
      height 2rem
      line-height 2rem
      background-color #fff
      font-size .6rem

      .info {
        flex-grow 1
        padding 0 .5rem
        font-size 0

        span {
          font-size .6rem
        }
      }

      .btn {
        width 4.8rem

        &.disabled {
          background-color #ccc
          border-color #ccc
          pointer-events none
        }
      }
    }
  }

  .checkbox {
    display inline-block
    width .7rem
    height .7rem
    border 1px solid #d9d9d9
    background-color #fff
    border-radius 50%
    text-align center
    line-height .7rem
    margin-right .5rem

    .iconfont {
      font-size .6rem
      color #fff
    }

    &[checked] {
      background-color #b4282d
      border-color #b4282d
    }
  }

  .service-policy {
    background-color transparent
    color #666

    .iconfont {
      color #666
    }
  }

  .notice {
    display flex
    align-items center
    font-size .65rem
    color #f48f18
    background-color #fff8d8
    padding 0 .5rem
    height 1.7rem

    span {
      flex-grow 1
    }
  }

  .goods-list {
    & > li {
      padding 0
      border none

      &:not(:first-child) .info {
        border-top 1px solid #ececec
      }

      .key {
        padding .5rem 0
        align-self center
      }

      .info {
        padding .5rem .5rem .5rem 0

        img {
          width 3.4rem
          height 3.4rem
          background-color #f4f4f4
          margin-right .5rem
          float left
        }

        .txt {
          line-height 1

          .des {
            color #666666
            margin-top .25rem
          }

          .txtbtm {
            margin-top 1rem
            line-height 1rem
          }
        }
      }
    }
  }

  .count {
    height 1rem
    line-height 1rem

    input {
      line-height 1rem
      width 2rem
    }

    span {
      width 1.5rem
      font-size 1rem
    }
  }
</style>
