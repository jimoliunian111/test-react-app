import React, { useState, useEffect } from 'react';

import './assets/style.css';

import Banner from '../../../components/banner/banner.js'
import Accordion from '../../../components/accordion/accordion.js'
import Gap from '../../../components/gap/gap.js'
import CheckModule from '../../../components/check-module/check-module.js'

import { FetchGetAccordionData } from '../../../apis/index.js'

let arr = []

const check_list = [
  {value: 1, label: '30万'},
  {value: 2, label: '40万'},
  {value: 3, label: '340万'},
  {value: 4, label: '50万'},
  {value: 6, label: '60万'},
]

const getAccordionData = () => {
  return FetchGetAccordionData({}).then(res => {
    console.log('手风琴数据获取成功', res)
    arr = res
  }).catch(res => {
    console.log('手风琴数据获取失败', res)
  })
}


const ProductDetail = (props) => {
  console.log('ProductDetail-props', props)
  
  let [state, setState] = useState(arr)
  // let [checkList, setCheckList] = useState(check_list)
  let [checked, setChecked] = useState(3)
  
  useEffect(() => {
    const result = async () => {
      await getAccordionData()
      setState(arr)
    }
    result()
  }, [])
  
  const handleFunc = (idx) => {
    console.log('555555', idx)
    setState(state.map((item, i) => Object.assign(item, {show: i === idx ? true : false})))
  }
  const getCheckData = (v,i) => {
    console.log('qqqq', v)
    setChecked(v)
  }
  return (
    <div className="page-style">
      <Banner />
      <Gap />
      <CheckModule options={check_list} value={checked} getData={getCheckData} />
      <Accordion options={state} isAccordion={true} handleClick={handleFunc} />
    </div>
  )
}

export default ProductDetail