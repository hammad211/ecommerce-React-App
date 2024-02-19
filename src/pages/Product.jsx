import React, { useContext } from 'react'
import {ShopContext} from '../context/shopContext';
import BreadCrum from '../components/breadCrum/BreadCrum';
import ProductDisplay from '../components/productdisplay/ProductDisplay';
import {useParams} from 'react-router-dom';
import DescriptionBox from '../components/descriptionbox/DescriptionBox';
import RelatedProduct from '../components/relatedproduct/RelatedProduct';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id=== Number(productId));
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product;
