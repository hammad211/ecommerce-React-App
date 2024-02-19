import React from 'react';
import './NewCollections.css';
import new_collection from '../assets/Ecommerce_Frontend_Assets/Assets/new_collections.js'
import Items from '../item/Items';
const NewCollections = () => {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
        {new_collection.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
