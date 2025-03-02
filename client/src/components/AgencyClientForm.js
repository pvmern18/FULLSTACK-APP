import React, { useState } from 'react';
import { createAgencyAndClient } from '../services/api';

const AgencyClientForm = () => {
    const [formData, setFormData] = useState({
        AgencyId: '',
        Name: '',
        Address1: '',
        Address2: '',
        State: '',
        City: '',
        PhoneNumber: '',
        ClientId: '',
        Email: '',
        TotalBill: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createAgencyAndClient(formData);
            alert('Agency and Client created successfully!');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Agency and Client</h2>
            <input type="text" name="AgencyId" placeholder="Agency ID" value={formData.AgencyId} onChange={handleChange} required />
            <input type="text" name="Name" placeholder="Agency Name" value={formData.Name} onChange={handleChange} required />
            <input type="text" name="Address1" placeholder="Address 1" value={formData.Address1} onChange={handleChange} required />
            <input type="text" name="Address2" placeholder="Address 2" value={formData.Address2} onChange={handleChange} />
            <input type="text" name="State" placeholder="State" value={formData.State} onChange={handleChange} required />
            <input type="text" name="City" placeholder="City" value={formData.City} onChange={handleChange} required />
            <input type="text" name="PhoneNumber" placeholder="Phone Number" value={formData.PhoneNumber} onChange={handleChange} required />
            <input type="text" name="ClientId" placeholder="Client ID" value={formData.ClientId} onChange={handleChange} required />
            <input type="email" name="Email" placeholder="Client Email" value={formData.Email} onChange={handleChange} required />
            <input type="number" name="TotalBill" placeholder="Total Bill" value={formData.TotalBill} onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AgencyClientForm;