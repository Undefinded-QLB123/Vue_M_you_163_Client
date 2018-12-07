// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button,Search} from 'mint-ui'
import './mock/mockServer'
import './assets/iconfont.css'

Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
Vue.config.productionTip = false;
//将store保存在Vue上
Vue.store = store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
});
