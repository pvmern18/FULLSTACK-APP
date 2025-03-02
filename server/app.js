const express = require('express');
const agencyRoutes = require('./routes/agencyRoutes.js');
const clientRoutes = require('./routes/clientRoutes.js');
const authMiddleware = require('./middleware/auth.js');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const dotenv=require("dotenv").config()
const connectDb=require("../server/config/db.js")
const app = express();

app.use(cors());
app.use(express.json());

connectDb()
// this are the Routes

app.use('/api/user', userRoutes);

app.use('/api', authMiddleware,  agencyRoutes);
app.use('/api', authMiddleware,  clientRoutes);



module.exports = app;