import React, { useState } from 'react';
import './assets/style.scss';

const CheckModule = (props) => {
  console.log('CheckModule-props', props)
  let [value, setVal] = useState(props.value)
  
  const list = props.options.map((item, idx) => {
    return <div className={['check-item-style', value === item.value ? 'active-style' : null].join(' ')} key={idx} onClick={() => checkItem(item, idx)}>
             {item.label}
           </div>
  })
  
  const checkItem = (item, idx) => {
    console.log('---------------', item, props.value)
    setVal(item.value)
    props.getData(item.value)
  }
  
  return (
    <div className="check-module">
      {list}
    </div>
  )
}

export default CheckModule;