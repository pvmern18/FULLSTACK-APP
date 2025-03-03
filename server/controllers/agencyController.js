const Agency = require('../models/Agency.js');
const Client = require('../models/Client.js');

exports.createAgencyAndClient = async (req, res) => {
    try {
        const { AgencyId, Name, Address1, Address2, State, City, PhoneNumber, ClientId, Email, TotalBill } = req.body;

       
        const agency = new Agency({ AgencyId, Name, Address1, Address2, State, City, PhoneNumber });
        await agency.save();

        
        const client = new Client({ ClientId, AgencyId, Name, Email, PhoneNumber, TotalBill });
        await client.save();

        res.status(201).json({ message: 'Agency and Client created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};