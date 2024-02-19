import React from 'react';
import './Popular.css';
import data_product from '../assets/Ecommerce_Frontend_Assets/Assets/data.js'
import Items from '../item/Items';
const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular In Women</h1>
      <hr/>
      <div className='popular-item'>
        {data_product.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
