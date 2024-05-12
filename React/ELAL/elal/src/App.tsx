import React from 'react';
import './App.css';
import ProductIdChecker from './ProductIdChecker'; // Import the component

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Product ID Checker</h1>
      <ProductIdChecker /> {/* Use the component */}
    </div>
  );
};

export default App;
