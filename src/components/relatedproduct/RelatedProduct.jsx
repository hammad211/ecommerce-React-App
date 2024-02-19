import React from 'react';
import './RelatedProduct.css';
import data_product from '../assets/Ecommerce_Frontend_Assets/Assets/data';
import Items from '../item/Items';
const RelatedProduct = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-items">
        {data_product.map((item,i)=>{
        return <Items key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />

        })}
      </div>
    </div>
  )
};
export default RelatedProduct;
