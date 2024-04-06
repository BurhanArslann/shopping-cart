import React from 'react'
import ProductItem from './ProductItem'
import ProductData from '../ProductData'

  

const Product = (props) => {
  return (
    <div className='grid grid-cols-3 gap-10 mb-8'>
        {ProductData.map((item)=>(
          <ProductItem key={item.id} item={item} cart={props.cart} />
        ))}
    </div>
  )
}

export default Product
