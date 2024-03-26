import React, { ReactNode, useState } from 'react'
import './productBox.scss'
import { products } from '../../productsList/products';

function productBox() {
  const [list, setList] = React.useState(products);

  function removeProduct(id: number) {
    const newList = list.filter((product) => product.id !== id)
    setList(newList)
  }
  function highRating() {
    const newList = list.filter((product) => product.rating > 4.5)
    setList(newList)
    console.log(newList);
  }

  return (
    <>
      <div>
        <button className='filterButton' onClick={() => highRating()}>Rating 4.5+</button>
      </div>
      <div className='mainDiv'>
        {list.map((product) => (
          <div className='mainDiv__productBox' key={product.id}>
            <div className='mainDiv__productImg'>
              <img src={product.images[1]} alt="product image" />
            </div>
            <h5>{product.title}</h5>
            <p>${product.price}</p>
            <p>Rating: {product.rating}</p>
            <button type='button' onClick={() => removeProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default productBox