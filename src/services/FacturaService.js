import query from '../config/db.js';
import DetalleFacturaService from '../services/DetalleFacturaService.js'
import ProductoService from './ProductoService.js';

const FacturaService = {}
// privado
const processDetails = async (item, id_factura) => {
    await DetalleFacturaService.addDetalleFactura(item, id_factura);
    const producto = await ProductoService.getProductoById(item.id_producto);
    const newstock = producto[0].stock - item.cantidad;
    await ProductoService.updateProductoS(item.id_producto, newstock);
    return " todo ok";
};
const addMasterFactura = async(id_factura, id_cliente, fecha)=>{
    var sql = `INSERT INTO factura (id_factura, id_cliente,fecha) VALUES (?, ?, ?)`;
    const response = await query(sql, [id_factura, id_cliente, fecha]);
};
// publico
FacturaService.addFactura = async (factura) => {
    const { id_factura, id_cliente, fecha, items } = factura;
    var esValido = true;
       for (const x of items) {
        const producto = await ProductoService.getProductoById(x.id_producto);
        const total = producto[0].stock - x.cantidad;
        console.log('valores:', producto[0].stock, x.cantidad, total);
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
