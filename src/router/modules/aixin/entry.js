import Aixin from '../../../views/aixin/index.js'

const files = require.context('./', true, /\.read.js$/)
let configRouters = []
files.keys().forEach(key => { // 取出每个公司的路由路口文件
  configRouters = configRouters.concat(files(key).default)
})

const aixinRoutes = [
  {
    path: '/aixin',
    component: Aixin,
    routes: [
      ...configRouters
    ]
  }
]

export default aixinRoutes