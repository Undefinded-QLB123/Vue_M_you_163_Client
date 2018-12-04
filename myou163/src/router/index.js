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


Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path:'/msite',
      component:Msite,
      children: [
        {
          path: '/msite/recommend',
          component: Recommend
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
      component: Classify
    },
    {
      path: '/distinguish',
      component: Distinguish
    },
    {
      path: '/shoppingcart',
      component: ShoppingCart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
