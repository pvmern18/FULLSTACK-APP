import React, { useState } from 'react';
import { updateClient } from '../services/api';

const UpdateClientForm = () => {
    const [clientId, setClientId] = useState('');
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        PhoneNumber: '',
        TotalBill: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateClient(clientId, formData);
            alert('Client updated successfully!');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Client</h2>
            <input type="text" placeholder="Client ID" value={clientId} onChange={(e) => setClientId(e.target.value)} required />
            <input type="text" name="Name" placeholder="Client Name" value={formData.Name} onChange={handleChange} required />
            <input type="email" name="Email" placeholder="Client Email" value={formData.Email} onChange={handleChange} required />
            <input type="text" name="PhoneNumber" placeholder="Phone Number" value={formData.PhoneNumber} onChange={handleChange} required />
            <input type="number" name="TotalBill" placeholder="Total Bill" value={formData.TotalBill} onChange={handleChange} required />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateClientForm;