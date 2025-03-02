const express = require('express');
const { createAgencyAndClient } = require('../controllers/agencyController.js');
const router = express.Router();

router.post('/agency-client', createAgencyAndClient);
module.exports = router;