const express = require('express');
const { updateClient, getTopClients } = require('../controllers/clientController.js');
const router = express.Router();

router.put('/client/:ClientId', updateClient);
router.get('/top-clients', getTopClients);
module.exports = router;