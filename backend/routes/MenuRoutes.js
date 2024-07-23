const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/MenuController');

// Create a new menu item
router.post('/', MenuController.createMenuItem);

// Get all menu items
router.get('/', MenuController.getAllMenuItems);

// Get a single menu item by ID
router.get('/:id', MenuController.getMenuItemById);

// Update a menu item by ID
router.put('/:id', MenuController.updateMenuItemById);

// Delete a menu item by ID
router.delete('/:id', MenuController.deleteMenuItemById);

module.exports = router;
