import App from '../../../views/App/App.js'

const files = require.context('./', true, /\.read.js$/)
let configRouters = []
files.keys().forEach(key => { // 取出每个公司的路由路口文件
  configRouters = configRouters.concat(files(key).default)
})

const app = [
  {
    path: '/',
    exact: true,
    component: App,
    routes: [
      ...configRouters
    ]
  }
]

export default app