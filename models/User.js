import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: { type: String, required: true, unique:true },
    role: { type: String, enum: ['volunteer', 'intern'], required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema)