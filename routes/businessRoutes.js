// routes/businessRoutes.js
const express = require('express');
const router = express.Router();
const Client = require('../models/client');
const db = require('../services/orm');

// Create a new business
router.put('/createBusiness', async (req, res) => {
  try {
    const { ownerName, name, displayName, description, number, location } = req.body;

    // Check if a business with the same name or number already exists
    // const existingBusiness = await db.query.clients.findMany({
    //   with: {
    //     name: name
    //   }
    // });

    // if (existingBusiness) {
    //   return res.status(400).json({ error: 'Business with the same name or number already exists' });
    // }

    // If not, create a new business
    const newBusiness = {
      ownerName: ownerName,
      name: name,
      displayName: displayName,
      description: description,
      number: number,
      location: location
    }

    const add = await db.insert(newBusiness);
    if(add){
    res.json(add);
    } else {
      return res.status(500).json({ error: 'Cannot add into data' });
    }
  } catch (error) {
    console.error('Error creating business:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get a business by ID
router.get('/retrieve/:id', async (req, res) => {
  try {
    const businessId = req.params.id;
    const business = await Client.findByPk(businessId);

    if (!business) {
      return res.status(404).json({ error: 'Business not found' });
    }

    res.json(business);
  } catch (error) {
    console.error('Error retrieving business:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get all businesses
router.get('/retrieve', async (req, res) => {
  try {
    const businesses = await Client.findAll();
    res.json(businesses);
  } catch (error) {
    console.error('Error retrieving businesses:', error);
    res.status(500).send('Internal Server Error');
  }
});
module.exports = router;
