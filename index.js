import multer from 'multer';
import express, { response } from 'express';
import cors from 'cors';
import ClienteRouter from './src/routes/ClienteRoute.js'
import productoRouter from './src/routes/ProductoRoute.js';
import movimientoRouter from './src/routes/MovimientoRoute.js';
import FacturaController from './src/controllers/FacturaController.js';
import ImagenController from './src/controllers/ImagenController.js';
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())

/*app.use(function (req, res, next) {
    console.log("time", Date.toString());
    next();
});*/


const upload = multer({ dest: './src/upload' })
app.use(upload.any());




app.post('/imagen',ImagenController.addImagen);


app.use('/producto', productoRouter);

app.use('/movimiento', movimientoRouter);

app.use('/cliente',ClienteRouter);


app.post('/factura', FacturaController.addFactura);

app.get('/factura/:id_factura',FacturaController.getFacturaTotales);



app.listen(4020);