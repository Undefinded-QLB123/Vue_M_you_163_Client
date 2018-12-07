<template>
  <div>
    <top-bar></top-bar>
    <div v-show="!isShowPhoneLogin">
      <main>
        <div class="login-wrap">
          <div class="login-img"><i class="icon-login"></i></div>
          <div class="login-con">
            <div class="btn btn-full" @click="isShowPhoneLogin = true"><i class="iconfont icon-shouji"></i> 手机号码登录</div>
            <div class="btn btn-hollow btn-full"><i class="iconfont icon-youxiang"></i> 邮箱账号登录</div>
            <p>
              <router-link to="/register">手机账号快速注册 <i class="iconfont iconXl"></i></router-link>
            </p>
          </div>
          <footer class="flex quick-login">
            <div class="key"><i class="iconfont icon-weixin"></i> 微信</div>
            <div class="key"><i class="iconfont icon-qq"></i> QQ</div>
            <div class="key"><i class="iconfont icon-weibo"></i> 微博</div>
          </footer>
        </div>

      </main>
    </div>
    <!--手机号码登录-->
    <div class="login-wrap login-box" v-show="isShowPhoneLogin">
      <div class="login-img"><i class="icon-login"></i></div>
      <div class="login-con">
        <form>
          <ul class="flex-list">
            <li>
              <div class="info">
                <input type="number" maxlength="11" placeholder="请输入手机号码" v-model="register.user"
                       @keyup="showClear($event)" @blur="validateNumber()">
              </div>
              <div class="key" @click="clear()"><i class="iconfont icon-guanbi" v-show="isShowClear"></i></div>
            </li>
            <li>
              <div class="info">
                <input :type="inputType" placeholder="请输入密码" v-model="register.password" @blur="validatePsd()">
              </div>
              <div class="key" @click="isShowPassword = !isShowPassword"><i
                :class="['iconfont',{'icon-bukejian': isShowPassword,'icon-kejian': !isShowPassword}]"></i></div>
            </li>
          </ul>
          <p class="error" v-show="isShowError">{{errorTxt}}</p>
          <div class="unlogin">
            <router-link to="/forget" class="fr">忘记密码</router-link>
            <router-link to="/register">注册账号</router-link>
          </div>
          <div class="btn btn-full" @click="submitForm(register)">登录</div>
          <div class="btn btn-hollow btn-full" @click="isShowPhoneLogin = false">其他登录方式</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import {mapState} from 'vuex'
  import TopBar from '../../components/TopBar/TopBar'

  export default {
    name: 'Login',
    components: {
      TopBar
    },
    data() {
      return {
        isShowPhoneLogin: false, // 手机号码登录显示
        isShowClear: false, // 是否显示清除按钮
        isShowPassword: false, // 密码是否可见
        errorTxt: '', // 错误提示信息
        isShowError: false, // 是否显示错误提示信息
        register: {
          // 注册信息
          user: '', // 账号
          password: '' // 密码
        }
      }
    },
    computed: {
      ...mapState(['cartGoods']),
      // 密码输入框类型
      inputType() {
        if (this.isShowPassword) {
          return 'text'
        } else {
          return 'password'
        }
      }
    },
    methods: {
      // input显示清除按钮
      showClear(event) {
        if (event.key !== '') {
          this.isShowClear = true
        } else {
          this.isShowClear = false
        }
      },
      // 清除input内容
      clear() {
        this.register.user = ''
        if (this.register.user !== '') {
          this.isShowClear = true
        } else {
          this.isShowClear = false
        }
      },
      // 验证号码
      validateNumber() {
        if (this.register.user === '') {
          this.isShowError = true
          this.errorTxt = '请输入手机号码'
          return false
        } else {
          let flag = /^((13|15|18|14|17)+\d{9})$/.test(this.register.user)
          if (!flag) {
            this.isShowError = true
            this.errorTxt = '手机号码格式不正确'
            return false
          } else {
            this.isShowError = false
            return true
          }
        }
      },
      // 验证密码
      validatePsd() {
        if (this.register.password === '') {
          this.isShowError = true
          this.errorTxt = '请输入密码'
          return false
        } else {
          let flag = /^\w{6,18}$/.test(this.register.password)
          if (!flag) {
            this.isShowError = true
            this.errorTxt = '密码不能少于6位'
            return false
          } else {
            this.isShowError = false
            return true
          }
        }
      },
      // 提交表单
      submitForm(formName) {
        if (this.validateNumber() && this.validatePsd()) {
          transferData.userLogin(JSON.stringify(formName)).then(({data}) => {
            if (data.info === false) {
              Toast('账号不存在')
              return
            }
            if (data.success) {
              Toast('登录成功')
              let token = data.token
              let username = data.username
              //this.$store.dispatch('UserLogin', token)
              //this.$store.dispatch('UserName', username)
              //.$store.dispatch('mergeCart', this.cartGoods)
              // 跳到首页
              this.$router.push('/home')
            } else {
              Toast('密码错误')
            }
          })
        }
      }
    }
  }
</script>


<style scoped lang="stylus">
  div{
    position: relative;
    height: 96%;
    padding-bottom 2%
    background: #F2F5F4;
    main {
      .login-wrap {
        font-size: 0.6rem;

        .login-img {
          padding: 2.4rem 0;
          text-align: center;

          .icon-login {
            display: inline-block;
            width: 3.57333rem;
            height: 1.2rem;
            background-image: url(//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png);
            background-size: 100% 100%;
          }
        }
        .login-con{
          padding: 0 .53333rem;
          margin-bottom: 2.73333rem;
          .btn{
            border-radius: 2px;
            display: block;
            width: 100%;
            height: 1.05333rem;
            line-height: 1.25333rem;
          }
          .iconfont{
            margin-right: .11333rem;
            position: relative;
            top: -.03667rem;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
            background-repeat: no-repeat;
            background-size: .53333rem 3.86667rem;
            width: .53333rem;
            height: .53333rem;
            box-shadow: 0 0 black;
          }
          .btn-full{
            vertical-align: middle;
            text-align: center;
            font-size: .37333rem;
            color: #fff;
            border: 1px solid #b4282d;
            background-color: #b4282d;
            overflow: hidden;
            margin-bottom: .42667rem;
            .icon-shouji{
              background-position: 0 -.66667rem;
            }
          }
          .btn-hollow{
            vertical-align: middle;
            text-align: center;
            font-size: .37333rem;
            color: #b4282d;
            border: 1px solid #b4282d;
            background-color: #fff;
            overflow: hidden;
            margin-bottom: .42667rem;
            .icon-youxiang{
              background-position 0 0;
            }
          }
          p{
            color: #333;
            font-size: .37333rem;
            text-align: center;
            width: 100%;
            a{
              color: #333;
              .iconXl{
                width: .37333rem;
                height: .37333rem;
                margin-right: .21333rem;
                position: relative;
                top: -.02667rem;
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
                background-size 100% 100%
              }
            }
          }
        }
        .quick-login{
          position: absolute;
          width: 100%;
          left: 0;
          bottom: -2.06667rem;
          height: .53333rem;
          text-align: center
          .key{
            height: .53333rem;
            border-right: 1px solid #979797;
            display: inline-block;
            text-align: center;
            padding: 0 .53333rem;
            font-size 12px
            color #7F7F7F
          }
          .iconfont{
            color #7F7F7F
            position: relative;
            display: inline-block;
            width: .53333rem;
            height: .53333rem;
          }
        }
      }
    }

  }



</style>
