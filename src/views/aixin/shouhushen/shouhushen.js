import React from 'react'
import {renderRoutes} from 'react-router-config';


const Shouhushen = (props) => {
  console.log('Shouhushen-props', props)
  return (
    <div>
      <h2>守护神</h2>
      {renderRoutes(props.route.routes, { someProp: "these extra props are optional" })}
    </div>
  )
}

export default Shouhushen