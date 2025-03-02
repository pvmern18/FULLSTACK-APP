import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false); // Update state to reflect logout
        window.location.reload(); // Refresh the page
    };

    return (
        <nav>
            <ul>
                {isLoggedIn ? (
                    <>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create">Create Agency & Client</Link></li>
                        <li><Link to="/update">Update Client</Link></li>
                        <li><Link to="/top-clients">Top Clients</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;