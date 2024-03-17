import React from 'react';
import './ProductsBoxes.scss';
import { productsList } from '../productsList/products.module';

interface productProps {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string
}

function products() {
  return (

    productsList.map((product:productProps) => (
      <div key={product.id} className='productDiv'>
        <p>{product.title}</p>
      </div>
    )

    )

  )
}

export default products