import query from '../config/db.js';
import ProductoService from './ProductoService.js';

const MovimientoService={}

MovimientoService.getMovimientos=async (req,res)=>{

    var sql= "select * from movimiento";
    const movimientos = await query(sql);
    return movimientos;

}

MovimientoService.addMovimientos = async (movimiento) => {

    const { idtipo_movimiento, items } = movimiento;

    var sql = `INSERT INTO movimiento (idtipo_movimiento,id_producto,cantidad) VALUES (?, ?,?)`
    const response = await query(sql, [idtipo_movimiento, null, null]);

    for (const x of items) {
        
        // if(idtipo_movimiento === 2) negativo sino positivo
        // 
        // if(error) "lo sentimos" sino "felicitaciones" 
        // -> const mensaje = (error) ? "lo sentimos" : "felicitaciones";

        const signo = (idtipo_movimiento === 2) ? 1 : -1;        
        const producto = await ProductoService.getProductoById(x.id_producto);            
        const newstock = producto.stock + (x.cantidad * signo);
        await ProductoService.updateProductoS(x.id_producto, newstock);
    }

    /*
    if (idtipo_movimiento === 2) {

        for (const x of items) {
            const producto = await ProductoService.getProductoById(x.id_producto);            
            const newstock = producto.stock + x.cantidad;            
            await ProductoService.updateProductoS(x.id_producto, newstock);
        }

    } else {

        for (const y of items) {
            const producto = await ProductoService.getProductoById(y.id_producto);
            const newstock = producto.stock - y.cantidad;
            await ProductoService.updateProductoS(y.id_producto, newstock);
        }
    }
    */
    return "movimiento generado";

}


export default MovimientoService;