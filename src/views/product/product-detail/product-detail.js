import React from 'react';

import './assets/style.css';
import { Accordion, List } from 'antd-mobile';

const Banner = (attr) => {
  console.log('产品banner图', attr)
  return (
    <div className="full-image-style">
      <img src='http://image.beta.2239.com/api/images/show/5f053da2457d14796777de60.jpg' />
    </div>
  )
}

const onChange = (key) => {
  console.log(key);
}

const Test = () => {
  return (
    <div style={{ marginTop: 10, marginBottom: 10 }}>
      <Accordion defaultActiveKey="0" className="my-accordion" onChange={onChange}>
        <Accordion.Panel header="Title 1">
          <List className="my-list">
            <List.Item>content 1</List.Item>
            <List.Item>content 2</List.Item>
            <List.Item>content 3</List.Item>
          </List>
        </Accordion.Panel>
        <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
        <Accordion.Panel header="Title 3" className="pad">
          text text text text text text text text text text text text text text text
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}

const ProductDetail = (props) => {
  console.log('ProductDetail-props', props)
  return (
    <div className="page-style">
      <Banner />
      <Test />
    </div>
  )
}

export default ProductDetail