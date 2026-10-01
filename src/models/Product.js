import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    disponible: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
export const Product = mongoose.model("Product", productSchema);
