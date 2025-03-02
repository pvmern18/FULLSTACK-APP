import React, { useEffect, useState } from 'react';
import { getTopClients } from '../services/api';

const TopClientsList = () => {
    const [topClients, setTopClients] = useState([]);

    useEffect(() => {
        const fetchTopClients = async () => {
            try {
                const data = await getTopClients();
                setTopClients(data);
            } catch (error) {
                alert(`Error: ${error.message}`);
            }
        };
        fetchTopClients();
    }, []);

    return (
        <div>
            <h2>Top Clients</h2>
            {topClients.length > 0 ? (
                <ul>
                    {topClients.map((client, index) => (
                        <li key={index}>
                            <strong>Agency:</strong> {client.AgencyName}, <strong>Client:</strong> {client.ClientName}, <strong>Total Bill:</strong> {client.TotalBill}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No top clients found.</p>
            )}
        </div>
    );
};

export default TopClientsList;