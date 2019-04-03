const express = require('express');
const router = express.Router();

const portfolioCtrl = require('../controllers/portfolio');
const authService = require('../services/auth');

router.get('', portfolioCtrl.getPortfolios);

module.exports = router;