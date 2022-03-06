import query from "../config/db.js";

const DetalleFacturaService = {}

DetalleFacturaService.addDetalleFactura = async ({ id_producto, cantidad, precio }, id_factura) => {
    var sql = `INSERT INTO detalle_factura (id_factura,id_producto,cantidad,precio) VALUES (?, ?, ?, ?)`;
    return await query(sql, [id_factura, id_producto, cantidad, precio]);
};

export default DetalleFacturaService;