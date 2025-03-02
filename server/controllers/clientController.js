const Client = require('../models/Client.js');
const Agency = require('../models/Agency.js');


exports.updateClient = async (req, res) => {
    try {
        const { ClientId } = req.params;
        const updateData = req.body;

        const client = await Client.findOneAndUpdate({ ClientId }, updateData, { new: true });
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




exports.getTopClients = async (req, res) => {
    try {
        // Find the maximum TotalBill
        const maxBillClient = await Client.findOne().sort({ TotalBill: -1 });
        const maxTotalBill = maxBillClient.TotalBill;

        // Find all clients with the maximum TotalBill
        const topClients = await Client.find({ TotalBill: maxTotalBill });

        // Fetch Agency details for each client
        const result = await Promise.all(topClients.map(async (client) => {
            const agency = await Agency.findOne({ AgencyId: client.AgencyId });
            return {
                AgencyName: agency.Name,
                ClientName: client.Name,
                TotalBill: client.TotalBill
            };
        }));

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};