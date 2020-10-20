import React from 'react';

import './assets/style.css';

import Banner from '../../../components/banner/banner.js'
import Accordion from '../../../components/accordion/accordion.js'

const arr = [
  {
    // show: false,
    title: '亚瑟',
    value: '坦克',
    content: '大宝剑大宝剑大宝剑大宝剑大宝剑大宝剑大宝剑大宝剑大宝剑大宝剑大宝剑大宝剑'
  },{
    // show: false,
    title: '兰陵王',
    value: '刺客',
    content: '隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身隐身'
  },{
    // show: false,
    title: '孙尚香',
    value: '射手',
    content: '翻滚强化攻击翻滚强化攻击翻滚强化攻击翻滚强化攻击翻滚强化攻击翻滚强化攻击翻滚强化攻击'
  }
]

const ProductDetail = (props) => {
  console.log('ProductDetail-props', props)
  return (
    <div className="page-style">
      <Banner />
      <Accordion options={arr} />
    </div>
  )
}

export default ProductDetail