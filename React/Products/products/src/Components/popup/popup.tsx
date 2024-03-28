// import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import react-confirm-alert module
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { products } from '../../productsList/products';
import React from 'react';
import styles from './popup.module.scss'



function productDetailes() {
  const [list, setList] = React.useState(products);

  function openPopup() {
    list.map((product) => {
      confirmAlert({
        title: product.title,
        message: (
          <div key={product.id} className={styles.productCard}>
            <h4>{product.description}</h4>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            {product.images.map((img) => (
              <img src={img} />
            ))}
          </div>
        ),

        buttons: [
          {
            label: 'Close',          },
          {
            label: 'Add To Cart',
            // onClick: () => alert('Add To Cart!')
          }
        ]
      });
    })
  };
  return (
    <div>
      <button onClick={openPopup}>Open Confirm Dialog</button>
    </div>
  );
};

export default productDetailes;
