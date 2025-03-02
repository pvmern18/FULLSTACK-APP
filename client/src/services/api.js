import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

// Register User
export const registerUser = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/user/register`, data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Login User
export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/user/login`, data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Create Agency and Client
export const createAgencyAndClient = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${API_URL}/agency-client`, data, {
            headers: { Authorization: token },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Update Client
export const updateClient = async (clientId, data) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(`${API_URL}/client/${clientId}`, data, {
            headers: { Authorization: token },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Get Top Clients
export const getTopClients = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/top-clients`, {
            headers: { Authorization: token },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};