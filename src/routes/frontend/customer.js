'use strict';
const express = require('express');
const router = express.Router();

const customer = require('../../controllers/customer');

router.post('/contact', customer.contact);
module.exports = router;



