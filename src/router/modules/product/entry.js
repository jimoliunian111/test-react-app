import Product from '../../../views/product/index.js'

const files = require.context('./', true, /\.read.js$/)
let configRouters = []
files.keys().forEach(key => { // 取出每个公司的路由路口文件
  configRouters = configRouters.concat(files(key).default)
})

const productRoutes = [
  {
    path: '/product',
    component: Product,
    routes: [
      ...configRouters
    ]
  }
]

export default productRoutes