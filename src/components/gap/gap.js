import React from 'react';
import './assets/style.scss';

const Gap = (props) => {
  console.log('Gap-props', props)
  
  return (
    <div>
      <div className="gap-style">
        <div className="gap-left-style">保障方案</div>
        <div className="gap-right-style"></div>
      </div>
    </div>
  )
}

export default Gap;