import React from 'react';
import './assets/style.css';

const ProductItem = (props) => {
  console.log('ProductItem-props', props)
  const data = props.data
  
  
  const goDetil = () => {
    console.log('点击方法', props)
    props.goDetail(data)
    // this.props.history.push({
    //   pathnme: '/product/product-detail',
    //   query: {
    //     title: '这是详情页的query传参'
    //   }
    // })
  }
  return (
    <div className="product-item" onClick={goDetil}>
      <div className="product-item-left">
        <img src={data.logo} className="block-style logo-style" />
        <p className="logo-desc">{data.company}</p>
      </div>
      <div className="product-item-right">
        <div>
          <p className="product-item-right-title word-wrap-style line-overflow-2">{data.productName}</p>
          <p className="product-item-right-desc word-wrap-style line-overflow-3">{data.desc}</p>
        </div>
        <div>
          <p>{data.amount_min}{data.unit}起</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem