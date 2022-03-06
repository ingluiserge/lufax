import express, { response } from 'express';
import cors from 'cors';
import ClienteController from './src/controllers/ClienteController.js'
import productoRouter from './src/routes/ProductoRoute.js';
import FacturaController from './src/controllers/FacturaController.js';
import MovimientoController from './src/controllers/MovimientoController.js';


const app = express()
app.use(express.json())
app.use(cors())

app.use('/producto', productoRouter);

app.get('/movimiento',MovimientoController.getMovimiento);

app.post('/movimiento',MovimientoController.addMovimiento);

app.get('/cliente', ClienteController.getCliente);

app.post('/cliente', ClienteController.addCliente);

app.put('/cliente/:id_cliente', ClienteController.updateCliente);

app.delete('/cliente/:id_cliente', ClienteController.deleteCliente);

app.post('/factura', FacturaController.addFactura);

app.listen(4020);