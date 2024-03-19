import React, { ReactNode } from 'react'
import './productBox.scss'
import { products } from '../products';

interface BoxProps{
    children: ReactNode;
}

// const [list, setList] = React.useState(products);

// function removeProduct(id:number){
//   const newList = list.filter((product) => product.id !== id)
//   setList(newList)
// }



function Box() {
  return (
   <div className='mainDiv'>
    {/* <div className='mainDiv__productBox'>{children}</div>
    <div className='mainDiv__productBox'>{children}</div> */}
    {products.map((product) => (
        <div className='mainDiv__productBox' key={product.id}>
          <div className='mainDiv__productImg'>
          <img src={product.images[1]} alt="product image" />
          </div>
          <h5>{product.title}</h5>
          {/* <h6>{product.description}</h6> */}
          {/* <p>Brand: {product.brand}</p>br */}
          {/* <p>Price: {product.price}</p> */}
          <p>${product.price}</p>
          <p>Rating: {product.rating}</p>
          {/* <p>Stock: {product.stock}</p> */}
          {/* <button onClick={removeProduct}>Delete</button> */}
          <button>Delete</button>
        </div>
      ))}
   </div>
  )
}

export default Box