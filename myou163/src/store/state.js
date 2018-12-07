export default {
  footList: [
    {
      id: 0,
      isActive: true,
      name: '首页',
      activeClass: 'u-icon-tabBar-index u-icon-tabBar-index-active',
      linkTo: '/msite'
    },
    {
      id: 1,
      isActive: false,
      name: '分类',
      activeClass: 'u-icon-tabBar-topic u-icon-tabBar-topic-active',
      linkTo: '/classify'
    },
    {
      id: 2,
      isActive: false,
      name: '识物',
      activeClass: 'u-icon-tabBar-cate u-icon-tabBar-cate-active',
      linkTo: '/distinguish'
    },
    {
      id: 3,
      isActive: false,
      name: '购物车',
      activeClass: 'u-icon-tabBar-cart u-icon-tabBar-cart-active',
      linkTo: '/shoppingcart'
    },
    {
      id: 4,
      isActive: false,
      name: '个人',
      activeClass: 'u-icon-tabBar-ucenter u-icon-tabBar-ucenter-active',
      linkTo: '/profile'
    }
  ],
  headertabList: [
    {id: 0, name: '推荐', isActive: true, linkTo: '/recommend'},
    {id: 1, name: '居家', isActive: false, linkTo: '/home'},
    {id: 2, name: '鞋包配饰', isActive: false, linkTo: '/acc'},
    {id: 3, name: '服装', isActive: false, linkTo: '/cloth'},
    {id: 4, name: '电器', isActive: false, linkTo: '/electric'},
    {id: 5, name: '洗护', isActive: false, linkTo: '/wash'},
    {id: 6, name: '饮食', isActive: false, linkTo: '/drink'},
    {id: 7, name: '餐厨', isActive: false, linkTo: '/cook'},
    {id: 8, name: '婴童', isActive: false, linkTo: '/baby'},
    {id: 9, name: '文体', isActive: false, linkTo: '/hobby'},
    {id: 10, name: '特色区', isActive: false, linkTo: '/features'},
  ],
  typesTabs: [
    {id: 0, name: '推荐', isActive: true, linkTo: '/type/'},
    {id: 1, name: '居家', isActive: false, linkTo: '/type/home'},
    {id: 2, name: '餐厨', isActive: false, linkTo: '/type/cook'},
    {id: 3, name: '配件', isActive: false, linkTo: '/type/parts'},
    {id: 4, name: '服装', isActive: false, linkTo: '/type/cloth'},
    {id: 5, name: '洗护', isActive: false, linkTo: '/type/wash'},
    {id: 6, name: '婴童', isActive: false, linkTo: '/type/baby'},
    {id: 7, name: '杂货', isActive: false, linkTo: '/type/messy'},
    {id: 8, name: '饮食', isActive: false, linkTo: '/type/drink'},
    {id: 9, name: '志趣', isActive: false, linkTo: '/type/hobby'}
  ],
  mylist: [
    {id: 0, name: '全部', isActive: true, linkTo: '/self/mylist'},
    {id: 1, name: '待付款', isActive: false, linkTo: '/mylist/notpay'},
    {id: 2, name: '待发货', isActive: false, linkTo: '/mylist/notsend'},
    {id: 3, name: '已发货', isActive: false, linkTo: '/mylist/allsend'}
  ],
  kingKongModule:[],
  category:[],
  cartGoods:[],
  user:[],
  tagsHot: ['家居服特惠', '浪漫礼物2件85折', '衬衫T恤买3免1', '餐厨满199减20', '枕头', '软木拖', '四件套', '收纳'],
  tagsHistory:[]
}
