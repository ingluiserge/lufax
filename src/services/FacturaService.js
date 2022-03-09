import query from '../config/db.js';
import DetalleFacturaService from '../services/DetalleFacturaService.js'
import ProductoService from './ProductoService.js';

const FacturaService = {}

FacturaService.getFacturasTotal = async (id_factura) => {
    var sql = 'select factura.id_factura ,factura.id_cliente,detalle_factura.cantidad,producto.nombre_producto from factura inner join detalle_factura on factura.id_factura = detalle_factura.id_factura inner join producto on detalle_factura.id_producto = producto.id_producto  where factura.id_factura =?';
    const facturas = await query(sql, [id_factura]);
    // ?? pregunta si es null y si es asi returna un objeto con stock = 0
    return facturas;
};



// privado
const processDetails = async (item, id_factura) => {
    await DetalleFacturaService.addDetalleFactura(item, id_factura);
    const producto = await ProductoService.getProductoById(item.id_producto);
    const newstock = producto[0].stock - item.cantidad;
    await ProductoService.updateProductoS(item.id_producto, newstock);
    return " todo ok";
};
const addMasterFactura = async (id_factura, id_cliente, fecha) => {
    var sql = `INSERT INTO factura (id_factura, id_cliente,fecha) VALUES (?, ?, ?)`;
    const response = await query(sql, [id_factura, id_cliente, fecha]);
};
// publico
FacturaService.addFactura = async (factura) => {
    const { id_factura, id_cliente, fecha, items } = factura;
    var esValido = true;
    for (const x of items) {
        const producto = await ProductoService.getProductoById(x.id_producto);
        const total = producto.stock - x.cantidad;
        
        if (total < 0) {
            esValido = false;
        }
    }
    if (esValido) {
        await addMasterFactura(id_factura, id_cliente, fecha);
        items.forEach(item => processDetails(item, id_factura));
        return "factura guardada";
    } else {
        return "factura con error";
    }
};

// lo que sale por aqui es lo publico.
export default FacturaService;


/*import query from '../config/db.js';
import DetalleFacturaService from '../services/DetalleFacturaService.js'
import ProductoService from './ProductoService.js';

const FacturaService = {}


FacturaService.addFactura = async (factura) => {

    const { id_factura, id_cliente, fecha, items } = factura;

   
      
    var sql = `INSERT INTO factura (id_factura, id_cliente,fecha) VALUES (?, ?, ?)`;

    const response = await query(sql, [id_factura, id_cliente, fecha]);

    items.forEach(async item => {
        await DetalleFacturaService.addDetalleFactura(item, id_factura, response);
        const producto = await ProductoService.getProductoById(item.id_producto);
        const newstock = producto[0].stock - item.cantidad;
        await ProductoService.updateProductoS(item.id_producto,newstock);
        //consulto el producto con el id: const producto = await ProductService.getProductoById(item.producto_id)
        // nuevo stock = producto.stock - item.cantidad;
        // guardo nuevo stock.
    });

    return "ok";
};


export default FacturaService; */
