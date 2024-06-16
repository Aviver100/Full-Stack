import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">דף הבית</Link></li>
                <li><Link to="/destination/budapest">בודפשט</Link></li>
                <li><Link to="/admin">ניהול</Link></li>
                {/* Add more links for other destinations */}
            </ul>
        </nav>
    );
};

export default NavBar;
