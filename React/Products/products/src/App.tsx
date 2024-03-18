import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box/Box'
import { products } from './products';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {products.map((product) => (
        <Box key={product.id}>
          <img src={product.images[1]} alt="product image" />
          <h4>{product.title}</h4>
          <h6>{product.description}</h6>
          <p>Brand: {product.brand}</p><br />
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>

        </Box>
      ))}
    </>
  )
}

export default App
