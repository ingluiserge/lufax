import query from '../config/db.js';

const ProductoService = {}

ProductoService.getProducto = async (req, res) => {
    var sql = ('select * from producto')
    const productos = await query(sql);
    return productos;
};

ProductoService.getProductoById = async (id_producto) => {
    var sql = ('select * from producto where id_producto = ?')
    const productos = await query(sql,[id_producto]);
    // ?? pregunta si es null y si es asi returna un objeto con stock = 0
    return productos[0] ?? { stock : 0 };
};

ProductoService.addProducto = async ({ id_producto, nombre_producto, precio, stock }) => {

    var sql = `INSERT INTO producto (id_producto,nombre_producto,precio,stock) VALUES (?, ?, ?, ?)`;
    const resp = await query(sql, [id_producto, nombre_producto, precio, stock]);
    return "Producto Agregado";

};

ProductoService.updateProducto = async (id_producto, { nombre_producto, precio, stock }) => {
    var sql = `UPDATE producto SET nombre_producto = ?,precio = ?, stock = ? WHERE id_producto = ? `;
    const product = await query(sql, [nombre_producto, precio, stock, id_producto]);
    return "producto Actualizado";
};

ProductoService.updateProductoS = async (id_producto,stock ) => {
    var sql = `UPDATE producto SET stock = ? WHERE id_producto = ? `;
    const product = await query(sql, [stock, id_producto]);
    return "producto Actualizado";
};


ProductoService.deleteProducto = async (id_producto) => {

    var sql = `DELETE FROM producto WHERE id_producto = ? `;
    const respons = await query(sql, [id_producto]);
    return "Producto Eliminado";

};

export default ProductoService;