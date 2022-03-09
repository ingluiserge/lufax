import express, { response } from 'express';
import cors from 'cors';
import ClienteController from './src/controllers/ClienteController.js'
import productoRouter from './src/routes/ProductoRoute.js';
import movimientoRouter from './src/routes/MovimientoRoute.js';
import FacturaController from './src/controllers/FacturaController.js';



const app = express()
app.use(express.json())
app.use(cors())

app.use('/producto', productoRouter);

app.use('/movimiento', movimientoRouter);

app.get('/cliente', ClienteController.getCliente);

app.post('/cliente', ClienteController.addCliente);

app.put('/cliente/:id_cliente', ClienteController.updateCliente);

app.delete('/cliente/:id_cliente', ClienteController.deleteCliente);

app.post('/factura', FacturaController.addFactura);

app.get('/factura/:id_factura',FacturaController.getFacturaTotales);

app.listen(4020);