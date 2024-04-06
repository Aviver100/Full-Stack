import 'react-confirm-alert/src/react-confirm-alert.css';
import { useState } from 'react';
import { products } from '../../productsList/products';


export default function searchProduct() {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value)  
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>you search {searchInput}</p>
    </div>
  );
};
