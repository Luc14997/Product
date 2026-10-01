import { Product } from "../models/Product";

export const crearProducto = async (
    nombre: string,
    precio: number,
    stock: number,
    categoria: string,
    disponible: boolean
) => {
    const producto = await Product.create({
        nombre,
        precio,
        stock,
        categoria,
        disponible
    });
    return producto;
};

export const obtenerProductos = async () => {
    const productos = await Product.find();

    return productos;
};

export const actualizarProducto = async (
    id: string,
    datos: {
        nombre?: string;
        precio?: number;
        stock?: number;
        categoria?: string;
        disponible?: boolean;
    }
) => {
    const producto = await Product.findByIdAndUpdate(
        id,
        datos,
        {
            new: true,
            runValidators: true
        }
    );
    return producto;
};

export const eliminarProducto = async (id: string) => {
    const producto = await Product.findByIdAndDelete(id);

    return producto;
};
