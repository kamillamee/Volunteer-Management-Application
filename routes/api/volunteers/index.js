const express = require('express');

const router = express.Router();
const volunteers_controller = require('../../../controllers/api/volunteers');

// Define API routes
router.get('/', (req, res)=>{
    volunteers_controller.getAll(req, res);
});

module.exports = router;
