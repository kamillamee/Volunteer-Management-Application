const express = require('express');
const { validationResult } = require('express-validator');
const { addVolunteersValidation, deleteVolunteersValidation } = require('../../../validators/volunteers');

const router = express.Router();
const volunteers_controller = require('../../../controllers/api/volunteers');

// Define API routes
router.get('/', (req, res)=>{
    volunteers_controller.getAll(req, res);
});

router.post('/', addVolunteersValidation(), (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    volunteers_controller.create(req, res)
})

router.delete('/:id', deleteVolunteersValidation(), (req, res, next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  volunteers_controller.delete(req, res)
})

module.exports = router;

