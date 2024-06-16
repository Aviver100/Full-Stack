// src/components/ItemDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Fetch item details using id
    const item = { id, name: 'Item ' + id, description: 'Description ' + id };

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </div>
    );
};

export default ItemDetail;
