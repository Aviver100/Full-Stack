import React, { useState } from 'react';
import axios from 'axios';
import './AdminPanel.css'


const AdminPanel = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
    const [synagogues, setSynagogues] = useState([]);

    const handleAddRestaurant = () => {
        setRestaurants([...restaurants, { name: '' }]);
    };

    const handleAddSynagogue = () => {
        setSynagogues([...synagogues, { name: '' }]);
    };

    const handleInputChange = (e, index, type) => {
        const values = type === 'restaurants' ? [...restaurants] : [...synagogues];
        values[index][e.target.name] = e.target.value;
        type === 'restaurants' ? setRestaurants(values) : setSynagogues(values);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', name, description, image, restaurants, synagogues);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        if (image) formData.append('image', image);
        formData.append('restaurants', JSON.stringify(restaurants));
        formData.append('synagogues', JSON.stringify(synagogues));
    
        try {
            console.log('Sending request...');
            const res = await axios.post('http://localhost:5000/api/admin/destination', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Response:', res.data);
        } catch (err) {
            console.error('Error:', err);
        }
    };
    

    return (
        <div>
            <h1>ניהול יעדים</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>שם יעד:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>תיאור:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>תמונה:</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <div>
                    <h2>מסעדות כשרות</h2>
                    <button type="button" onClick={handleAddRestaurant}>הוסף מסעדה</button>
                    {restaurants.map((restaurant, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name="name"
                                value={restaurant.name}
                                onChange={(e) => handleInputChange(e, index, 'restaurants')}
                                required
                            />
                        </div>
                    ))}
                </div>
                <div>
                    <h2>בתי כנסת</h2>
                    <button type="button" onClick={handleAddSynagogue}>הוסף בית כנסת</button>
                    {synagogues.map((synagogue, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name="name"
                                value={synagogue.name}
                                onChange={(e) => handleInputChange(e, index, 'synagogues')}
                                required
                            />
                        </div>
                    ))}
                </div>
                <button type="submit">שמור יעד</button>
            </form>
        </div>
    );
};

export default AdminPanel;
