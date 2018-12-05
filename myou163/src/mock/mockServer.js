import Mock from 'mockjs'
import msite from './msite'

// 暴露接口: /msite
Mock.mock('/msite', {code: 0, msite: msite.kingKongModule});


console.log('执行了mockServer');
