# CRUD MongoDB con TypeScript

## Descripcion
Proyecto realizado para implementar un CRUD utilizando MongoDB, TypeScript y Mongoose, sin utilizar una API.
La entidad seleccionada es Producto.

## Tecnologias
- TypeScripy
- Node.js
- MongoDB
- Mongoose
- dotenv

## Entidad producto
Los productos contienen los siguientes campos:
- nombre
- precio
- stock
- categoria
- disponible
Además Mongoose agrega automáticamente:
- createdAt
- updateAt

## Operaciones CRUD
El proyecto permite:
- Crear un producto.
- Obtener todos los productos.
- Actualizar un producto.
- Eliminar un producto.

## Instalacion
Instalar las dependencias:
```bash
npm install