import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Classify from '../pages/Classify/Classify'
import Distinguish from '../pages/Distinguish/Distinguish'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import Profile from '../pages/Profile/Profile'
import ACC from "../pages/Msite/ACC/ACC";
import Recommend from "../pages/Msite/Recommend/Recommend";
import home from '../pages/Msite/Home/home'
import Cloth from "../pages/Msite/Cloth/Cloth";
import Electric from "../pages/Msite/Electric/Electric";
import Wash from "../pages/Msite/Wash/Wash";
import Drink from "../pages/Msite/Drink/Drink";
import Cook from "../pages/Msite/Cook/Cook";
import Baby from "../pages/Msite/Baby/Baby";
import Hobby from "../pages/Msite/Hobby/Hobby";
import Features from "../pages/Msite/Features/Features";
import ClassifyCateList from '../components/ClassifyCateList/ClassifyCateList'
import ClassifyList from '../components/ClassifyList/ClassifyList'
import Login from '../pages/Login/Login'
import SearchPage from "../components/SearchPage/SearchPage";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/msite',
      component: Msite,
      children: [
        {
          path: '/msite/recommend',
          component: Recommend,
        },
        {
          path: '/msite/home',
          component: home
        },
        {
          path: '/msite/acc',
          component: ACC
        },
        {
          path: '/msite/cloth',
          component: Cloth
        },
        {
          path: '/msite/electric',
          component: Electric
        },
        {
          path: '/msite/wash',
          component: Wash
        },
        {
          path: '/msite/drink',
          component: Drink
        },
        {
          path: '/msite/cook',
          component: Cook
        },
        {
          path: '/msite/baby',
          component: Baby
        },
        {
          path: '/msite/hobby',
          component: Hobby
        },
        {
          path: '/msite/features',
          component: Features
        },
        {
          path: '',
          redirect: '/msite/recommend'
        }
      ]
    },
    {
      path: '/classify',
      component: Classify,
      children: [
        {
          path: '/classify/109230000',
          component: ClassifyList
        },
        {
          path: '/classify/109224000',
          component: ClassifyList
        },
        {
          path: '/classify/1087004',
          component: ClassifyList
        },
        {
          path: '/classify/109217021',
          component: ClassifyList
        },
        {
          path: '/classify/1005000',
          component: ClassifyCateList
        },
        {
          path: '/classify/1008000',
          component: ClassifyCateList
        },
        {
          path: '/classify/1010000',
          component: ClassifyCateList
        },
        {
          path: '/classify/1043000',
          component: ClassifyCateList
        },
        {
          path: '/classify/1013001',
          component: ClassifyCateList
        },
        {
          path: '/classify/1005002',
          component: ClassifyCateList
        },
        {
          path: '/classify/1005001',
          component: ClassifyCateList
        },
        {
          path: '/classify/1011000',
          component: ClassifyCateList
        },
        {
          path: '/classify/1019000',
          component: ClassifyCateList
        },
        {
          path: '/classify/1065000',
          component: ClassifyCateList
        },
        {
          path: '',
          redirect: '/classify/109230000'
        }
      ]
    },
    {
      path: '/distinguish',
      component: Distinguish,
    },
    {
      path: '/shoppingcart',
      component: ShoppingCart,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isShow: true     //显示底部导航
      },
    },
    {
      path: '/search',
      component: SearchPage,
      meta: {
        isShow: true     //显示底部导航
      },
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
});
//注册全局守卫
const pathes = ['/profile'];

router.beforeEach((to, from, next) => {
  if (pathes.indexOf(to.path)>=0) {
    if (Vue.store.state.user.length>0) {
      next()
    } else {
      next({path: '/login'});
    }
  } else {
    next()
  }
});
export default router
