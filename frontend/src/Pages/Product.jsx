import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContex'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptioBox from '../Components/DescriptionBox/DescriptioBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
  const all_products = useContext(ShopContext)
  const product_id = useParams()
  const product = all_products.all_products_data.find((e)=>e.id === +product_id.productId);
  return (
    <div>
      <BreadCrums product = {product}/>
      <ProductDisplay product = {product}/>
      <DescriptioBox/>
      <RelatedProduct/>
    </div>
    
  )
}

export default Product