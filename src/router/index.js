const files = require.context('./modules', true, /\entry.js$/)
let configRouters = []
files.keys().forEach(key => { // 取出每个公司的路由路口文件
  configRouters = configRouters.concat(files(key).default)
})
let routes = [
  ...configRouters
]
export default routes;
