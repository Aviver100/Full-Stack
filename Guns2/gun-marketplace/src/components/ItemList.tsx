// src/components/ItemList.tsx
import React from 'react';

const ItemList: React.FC = () => {
  // Example item list
  const items = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' }
  ];

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
