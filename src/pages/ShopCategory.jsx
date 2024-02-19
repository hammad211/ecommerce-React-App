import React, { useContext } from 'react';
import './css/ShopCategory.css'
import dropdown_icon from '../components/assets/Ecommerce_Frontend_Assets/Assets/dropdown_icon.png';
import{ShopContext} from '../context/shopContext';
import Items from '../components/item/Items';
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=""/>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Items key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;
