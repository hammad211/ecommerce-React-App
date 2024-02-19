import React from 'react';
import './BreadCrum.css';
import arrow_icon from '../assets/Ecommerce_Frontend_Assets/Assets/breadcrum_arrow.png';

const BreadCrum = (props) => {
    console.log(props)
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" />{product.category}<img src={arrow_icon} alt="" />{product.name}


    </div>
  )
}

export default BreadCrum
