import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { products } from '../../productsList/products';
import { useState } from 'react';
import styles from './popup.module.scss'
import{ ProductsArray} from '../productBox/productBox'

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  images: string[];
}

function ProductDetailes(product: Product) {

  const [list, setList] = useState(products);
  function addToCart(product: Product) {

    ProductsArray.push(product)
    console.log(ProductsArray);
    localStorage.setItem("Products Cart", JSON.stringify(ProductsArray))
  }
  function openPopup() {
    confirmAlert({
      title: product.title,
      message: (
        <div key={product.id} className={styles.productCard}>
          <h5>{product.description}</h5>
          <p>Price: {product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
          {product.images.map((img) => (
            <img key={img} src={img} alt='Product' />
          ))}
        </div>
      ),

      buttons: [
        {
          label: 'Close',
        },
        {
          label: 'Add To Cart',
          onClick: () => addToCart(product)
        }
      ]
    });
  };
  return (
    <div>
      <img key={product.id} src={product.images[1]} alt="product" onClick={() => openPopup()} />
    </div>
  );
};

export default ProductDetailes;
