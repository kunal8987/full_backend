
import mongoose from "mongoose";

/**
 * User Schema for MongoDB using Mongoose.
 * 
 * @typedef {Object} UserSchema
 * @property {string} username - The unique username of the user. Required.
 * @property {string} password - The password of the user. Required.
 * @property {string} email - The unique email address of the user. Required.
 * @property {string} name - The name of the user. Required.
 * @property {number} phone - The phone number of the user. Required.
 */
let userSchema = new mongoose.Schema({
    username: { type: String, required: true,unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true , unique: true },
    name: { type: String, required: true},
    phone:{type:Number, required: true },

})

module.exports = mongoose.model('User', userSchema);