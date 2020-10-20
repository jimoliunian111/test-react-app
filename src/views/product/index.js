import React from 'react'
import {renderRoutes} from 'react-router-config';
import {HashRouter as Router} from 'react-router-dom';
const Product = (props) => {
  console.log('Product-props', props)
  return (
    <div>
      <Router>
        {props.route && renderRoutes(props.route.routes, {title: '产品模块标题'})}
      </Router>
    </div>
    
  )
}

export default Product