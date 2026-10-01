import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
    disponible: boolean;
}

const productSchema = new Schema<IProduct>(
    {
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
    },
    {
        timestamps: true
    }
);

export const Product = mongoose.model<IProduct>(
    "Product",
    productSchema
);