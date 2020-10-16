import Shouhushen from '../../../views/aixin/shouhushen/shouhushen.js'
import Detail from '../../../views/aixin/shouhushen/detail/detail.js'

const shouhushen = [
  {
    path: '/aixin/shouhushen',
    component: Shouhushen,
    routes: [
      {
        path: '/aixin/shouhushen/detail',
        component: Detail,
        exact: true
      }
    ]
  }
]

export default shouhushen;