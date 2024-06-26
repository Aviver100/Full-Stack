import React, { ReactNode, useState } from 'react'
import styles from './productBox.module.scss'
import { products } from '../../productsList/products';
import ProductDetailes from '../popup/popup';
import Shoppingcart from '../Shopping Cart/shoppingcart'
import Search from '../Search/search'

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  images: string[];
}

export let ProductsArray: Product[] = [];
localStorage.getItem("Products Cart");

function ProductBox() {
  const [list, setList] = React.useState(products);
  const [searchInput, setSearchInput] = useState("");

  function removeProduct(id: number) {
    const newList = list.filter((product) => product.id !== id)
    setList(newList)
  }

  function highRating() {
    const newList = list.filter((product) => product.rating > 4.5)
    setList(newList)
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value)
  }

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.mainDiv__filterBar}>
          <button className={styles.mainDiv__filterButton} onClick={() => highRating()}>Rating 4.5+</button>
          <input type="text" onChange={handleSearch} />
          <Shoppingcart />
        </div>

        {list.filter((product) => {
          return searchInput.toLowerCase() === '' ? product : product.title.toLowerCase().includes(searchInput)
        })
          .map((product) => (
            <div className={styles.mainDiv__productBox} key={product.id}>
              <div className={styles.mainDiv__productImg}>
                <ProductDetailes {...product} />
              </div>
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <p>Rating: {product.rating}</p>
              <button type='button' onClick={() => removeProduct(product.id)}>Delete</button>
            </div>
          ))}
      </div>
    </>
  )
}

export default ProductBox