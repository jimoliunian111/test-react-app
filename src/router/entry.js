import React from 'react';
import {renderRoutes} from 'react-router-config';
import {HashRouter as Router} from 'react-router-dom';
import routes from './index.js'

const RouteConfig = (props) => {
  console.log('RouteConfig-props', props)
  return (
    <Router>
      <div>
        {renderRoutes(routes)}
      </div>
    </Router>
  )
}


export default RouteConfig;
