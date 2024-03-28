// import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import react-confirm-alert module
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { products } from '../../productsList/products';
import React from 'react';
import styles from './popup.module.scss'


function productDetailes() {
    const [list, setList] = React.useState(products);

    function handleClick() {
        list.map((product) => {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui'>
                            <button onClick={handleClick}>Open Confirm Dialog</button>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <button onClick={onClose}>No</button>
                        </div>
                    );
                }
            });
        })
    }
};

export default productDetailes;
