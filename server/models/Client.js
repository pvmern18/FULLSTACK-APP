const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    ClientId: { type: String, required: true, unique: true },
    AgencyId: { type: String, required: true },
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    TotalBill: { type: Number, required: true }
});

module.exports = mongoose.model('Client', clientSchema);