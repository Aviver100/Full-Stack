import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import ProductsBoxes from './products/productsComponents/ProductsBoxes.tsx'
import './index.css'
import ProductsBoxes from './products/productsComponents/ProductsBoxes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ProductsBoxes />
  </React.StrictMode>,
)
