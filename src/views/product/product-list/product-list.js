import React from 'react';
import './assets/style.css'

import ProductItem from '../../../components/product-item/product-item.js'

const arr = [
  {
    logo: 'http://image.beta.2239.com/api/images/show/5f01323a457d14771e1fedd6.jpg',
    company: '爱心人寿保险公司',
    productName: '守护神少儿重大疾病保险',
    desc: '轻症，中症，重疾多次不分组赔付；自选特定疾病，罕见疾病保障，额外赔付1倍保额；首次确诊条款约定疾病可免交后续保费',
    amount_min: 326,
    unit: '元',
    product_id: 1
  }, {
    logo: 'http://192.168.3.26:8080/images/1.jpg',
    company: '中国人寿保险公司',
    productName: '中国人寿重大疾病保险',
    desc: '轻症，中症，重疾多次不分组赔付；自选特定疾病，罕见疾病保障，额外赔付1倍保额；首次确诊条款约定疾病可免交后续保费',
    amount_min: 1000,
    unit: '元',
    product_id: 2
  }, {
    logo: 'http://192.168.3.26:8080/images/2.jpg',
    company: '泰康人寿保险公司',
    productName: '泰康人寿重大疾病保险',
    desc: '轻症，中症，重疾多次不分组赔付；自选特定疾病，罕见疾病保障，额外赔付1倍保额；首次确诊条款约定疾病可免交后续保费',
    amount_min: 2000,
    unit: '元',
    product_id: 3
  }, {
    logo: 'http://192.168.3.26:8080/images/4.jpg',
    company: '横琴人寿保险公司',
    productName: '横琴人寿疾病保险',
    desc: '轻症，中症，重疾多次不分组赔付；自选特定疾病，罕见疾病保障，额外赔付1倍保额；首次确诊条款约定疾病可免交后续保费',
    amount_min: 5000,
    unit: '元',
    product_id: 4
  }
  
]

const ProductList = (props) => {
  console.log('ProductList', props)
  
  const ComponentProductItem = (value) => {
    return (
      <div className="gap-style"><ProductItem data={value.data} goDetail={goDetail} /></div>
    )
  }
  
  const List = () => {
    let list = arr.map((item, idx) => <ComponentProductItem data={item} key={idx} />)
    return (
      <div>{list}</div>
    )
  }
  
  const goDetail = (data) => {
    console.log('什么参数', data, props, props.history.push)
    // props.history.push({
    //   pathnme: '/product/product-detail',
    //   query: {
    //     title: '这是详情页的query传参'
    //   }
    // })
    props.history.push('/product/product-detail', {
      title: '这是详情页的query传参'
    })
  }
  
  return (
    <div className="product-list">
      <List />
    </div>
  )
}

export default ProductList