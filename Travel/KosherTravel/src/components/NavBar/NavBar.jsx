import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NavBar.css'; // Custom styles

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light CustomNavBar fixed-top">
            <a className="navbar-brand" href="/">Travel</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto CustomNavList">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">בית</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Destinations">יעדים</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Times">זמני היום</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/Action">Action</Link>
                            <Link className="dropdown-item" to="/AnotherAction">Another action</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/SomethingElseHere">Something else here</Link>
                        </div>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="חיפוש" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">חיפוש</button>
                </form> */}
            </div>
        </nav>
    );
};

export default NavBar;
