import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, enum: ["Coffee", "Desserts", "Beverages"] },
    imageUrl: { type: String },
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
