import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

const Login = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            localStorage.setItem('token', response.token); // Save token to localStorage
            setIsLoggedIn(true); // Update state to reflect login
            navigate('/'); // Redirect to home page
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (<>
        <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>

            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    </>

    );
};

export default Login;