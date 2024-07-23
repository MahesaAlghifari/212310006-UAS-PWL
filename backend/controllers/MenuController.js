const Menu = require('../models/menu.model');

// Create new menu item
exports.createMenuItem = async (req, res) => {
    try {
        const newMenuItem = new Menu(req.body);
        const savedMenuItem = await newMenuItem.save();
        res.status(201).json(savedMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all menu items
exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await Menu.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get menu item by ID
exports.getMenuItemById = async (req, res) => {
    try {
        const menuItem = await Menu.findById(req.params.id);
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update menu item by ID
exports.updateMenuItem = async (req, res) => {
    try {
        const updatedMenuItem = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMenuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.status(200).json(updatedMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete menu item by ID
exports.deleteMenuItem = async (req, res) => {
    try {
        const deletedMenuItem = await Menu.findByIdAndDelete(req.params.id);
        if (!deletedMenuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.status(200).json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
