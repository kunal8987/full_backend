// Schema definition for menu items in the application
const mongoose = require("mongoose");

/**
 * Schema definition for a menu item.
 * 
 * @typedef {Object} MenuItem
 * @property {string} name - The name of the menu item. This field is required.
 * @property {string} [description=""] - A description of the menu item. Defaults to an empty string.
 * @property {string} category - The category of the menu item. Must be one of "coffee", "desserts", or "beverages".
 * @property {string} imageUrl - The URL of the image representing the menu item. Must be a valid URL starting with http or https.
 */
const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: "" },
    category: { type: String, enum: ["coffee", "desserts", "beverages"] },
    imageUrl: { type: String, match: /^https?:\/\/.+/ },
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
