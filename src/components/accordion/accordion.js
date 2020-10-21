import React from 'react';
import { useState } from 'react';
import './assets/style.scss';

const closeStyle = {
  transition: 'all 0.2s linear',
  transform: 'rotate(180deg)'
}
const openStyle = {
  transition: 'all 0.2s linear',
  transform: 'rotate(0deg)'
}
const showStyle = {
  transition: 'all 0.3s ease-out',
  height: 'auto',
  overflow: 'hidden'
}
const hideStyle = {
  transition: 'all 0.2s ease-out',
  height: '0',
  overflow: 'hidden',
  padding: '0 3.2vw'
}

const Accordion = (props) => {
  // console.log('Accordion-props', props)
  const Item = (item) => {
    // console.log('Item-props', item)
    let data = item.value
    const [show, setShow] = useState(data.show);
    
    const ItemClick = () => {
      if (props.isAccordion) {
        if (show) {
          setShow(!show)
        } else {
          props.handleClick(item.index)
        }
      } else {
        setShow(!show)
      }
    }
    return (
      <div>
        <div className="accordion-item" onClick={ItemClick}>
          <div className="accordion-item-title">{data.title}</div>
          <div className="accordion-item-option">
            <p>{data.value}</p>
            <p className="accordion-item-option-link" style={show ? openStyle : closeStyle}>
              <i className="icon iconfont icon-12xiajiantou"></i>
            </p>
          </div>
        </div>
        <div className="accordion-item-content" style={show ? showStyle : hideStyle}>
          {data.content}
        </div>
      </div>
    )
  }
  const Main = (props) => {
    // console.log('Main-props', props.list, props)
    const list = props.list.map((item, idx) => <Item value={item} index={idx} key={idx} />)
    return (
      <div className="accordion-style">
        {list}
      </div>
    )
  }
  return (
    <div>
      <Main list={props.options} />
    </div>
  )
}

export default Accordion;