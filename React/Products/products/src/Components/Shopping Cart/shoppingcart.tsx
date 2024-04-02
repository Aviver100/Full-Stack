import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useState } from 'react';
import { products } from '../../productsList/products';
import styles from './shoppingcart.module.scss'
import { ProductsArray } from '../productBox/productBox'

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   stock: number;
//   brand: string;
//   images: string[];
// }

function ShoppingCart() {

  const [list, setList] = useState(ProductsArray);

  function openCart() {
    confirmAlert({
      // title: list.title,
      message: (
        <div>
          {
            ProductsArray.map((product) => (
              <p>{product.title}</p>
            ))
          }
        </div>
      ),

      buttons: [
        {
          label: 'Close',
        }
      ]
    });
  };
  return (
    <div>
      <button type='button' onClick={() => openCart()}>Shopping Cart</button>
    </div>
  );
};

export default ShoppingCart;
