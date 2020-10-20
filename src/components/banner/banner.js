import React from 'react';
import './assets/style.css';

const Banner = (props) => {
  console.log('Banner-props', props)
  return (
    <div className="full-image-style">
      <img src='http://image.beta.2239.com/api/images/show/5f053da2457d14796777de60.jpg' />
    </div>
  )
}

export default Banner;