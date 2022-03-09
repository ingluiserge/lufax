import express, { response } from 'express';
import cors from 'cors';
import ClienteRouter from './src/routes/ClienteRoute.js'
import productoRouter from './src/routes/ProductoRoute.js';
import movimientoRouter from './src/routes/MovimientoRoute.js';
import FacturaController from './src/controllers/FacturaController.js';



const app = express()
app.use(express.json())
app.use(cors())

app.use('/producto', productoRouter);

app.use('/movimiento', movimientoRouter);

app.use('/cliente',ClienteRouter);


app.post('/factura', FacturaController.addFactura);

app.get('/factura/:id_factura',FacturaController.getFacturaTotales);

app.listen(4020);