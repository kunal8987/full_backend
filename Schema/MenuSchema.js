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
const menuItemSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, default: "" },
        category: {
            type: String,
            enum: ["coffee", "burger", "fries", "desserts", "beverages"],
        },
        imageUrl: { type: String, match: /^https?:\/\/.+/ },
        available: { type: Boolean, default: true },
    },
    { timestamps: true, versionKey: false }
);

let MenuItem = mongoose.model("MenuItem", menuItemSchema);
export default MenuItem;
