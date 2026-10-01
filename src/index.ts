import mongoose from "mongoose";
import dotenv from "dotenv";

import {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
} from "./services/productService";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const main = async (): Promise<void> => {
    try {
        if ( !MONGODB_URI ) {
            throw new Error("No se encontró MONGODB_URI en el archivo .env");
        }

        await mongoose.connect(MONGODB_URI);

        console.log("===================================");
        console.log("MongoDB conectado correctamente");
        console.log("===================================");

        const productoCreado = await crearProducto(
            "Termo Stanley",
            85000,
            10,
            "Bazar",
            true
        );

        console.log("\n--- CREATE: Producto creado ---");
        console.log(productoCreado);

        const productos = await obtenerProductos();

        console.log("\n--- READ: Todos los productos ---");
        console.log(productos);

        const productoEncontrado = await obtenerProductoPorId(
            productoCreado._id.toString()
        );

        console.log("\n--- READ: Producto por ID ---");
        console.log(productoEncontrado);

        const productoActualizado = await actualizarProducto(
            productoCreado._id.toString(),
            {
                precio: 90000,
                stock: 15
            }
        );

        console.log("\n--- UPDATE: Producto actualizado ---");
        console.log(productoActualizado);

        const productoEliminado = await eliminarProducto(
            productoCreado._id.toString()
        );

        console.log("\n--- DELETE: Producto eliminado ---");
        console.log(productoEliminado);
    } catch (error) {
        console.error("\nOcurrió un error:");
        console.error(error);
    } finally {
        await mongoose.disconnect();

        console.log("\nConexión con MongoDB cerrada.");
    }
}

main();
