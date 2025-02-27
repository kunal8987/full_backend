import MenuItem from "../Schema/MenuItemSchema.js";

// Function to add a new menu item
let addMenuItem = async (req, res) => {
    let { id } = req.params;
    try {
        // Check if a menu item with the same name already exists
        let existingMenuItem = await MenuItem.findById(id);
        if (!existingMenuItem) {
            return res.status(400).json({ error: "Menu item not found" });
        }

        return res.status(201).json({
            message: "Menu item added successfully",
            menuItem: newMenuItem,
        });
    } catch (error) {
        // Log the error and return a 500 status code
        console.error("add menu ", error.message);
        return res.status(500).json({ error: "error from add menu function " });
    }
};

// Function to get all menu items
let getAllMenuItems = async (req, res) => {
    try {
        // Retrieve all menu items from the database
        let menuItems = await MenuItem.find({});
        return res.status(200).json({
            message: "Menu items retrieved successfully",
            menuItems: menuItems,
        });
    } catch (error) {
        // Log the error and return a 500 status code
        console.error("get all menu items ", error.message);
        return res
            .status(500)
            .json({ error: "error from get all menu items function" });
    }
};

// Function to update a menu item
let updateMenuItems = async (req, res) => {
    let { id } = req.params;
    try {
        // Check if the menu item exists
        let existingMenuItems = await MenuItem.findById(id);
        if (!existingMenuItems) {
            return res.status(400).json({ error: "Menu item not found" });
        }
        // Update the menu item with the new data
        let updatedMenuItems = await MenuItem.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        return res.status(200).json({
            message: "Menu item updated successfully",
            updatedMenuItems: updatedMenuItems,
        });
    } catch (error) {
        // Log the error and return a 500 status code
        console.log("update menu item", error.message);
        return res
            .status(500)
            .json({ error: "error from update menu items function" });
    }
};

// Function to delete a menu item
let deleteMenuItem = async (req, res) => {
    let { id } = req.params;
    try {
        // Check if the menu item exists
        let existingMenuItem = await MenuItem.findById(id);
        if (!existingMenuItem) {
            return res.status(400).json({ error: "Menu item not found" });
        }
        // Delete the menu item
        await MenuItem.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Menu item deleted successfully",
        });
    } catch (error) {
        // Log the error and return a 500 status code
        console.error("delete menu item", error.message);
        return res
            .status(500)
            .json({ error: "error from delete menu item function" });
    }
};

exports = { addMenuItem, getAllMenuItems, updateMenuItems, deleteMenuItem };
