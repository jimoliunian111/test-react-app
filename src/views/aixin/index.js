import React from 'react'
import {renderRoutes} from 'react-router-config';
import {HashRouter as Router} from 'react-router-dom';
const Aixin = (props) => {
  console.log('Aixin-props', props)
  return (
    <div>
      <h2>爱心公司</h2>
      <Router>
        {props.route && renderRoutes(props.route.routes, {title: '爱心公司标题'})}
      </Router>
    </div>
    
  )
}

export default Aixin