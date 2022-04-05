import multer from 'multer';
import express from 'express';
import cors from 'cors';
import ClienteRouter from './src/routes/ClienteRoute.js'
import productoRouter from './src/routes/ProductoRoute.js';
import movimientoRouter from './src/routes/MovimientoRoute.js';
import FacturaController from './src/controllers/FacturaController.js';
import ImagenController from './src/controllers/ImagenController.js';
import bodyParser from 'body-parser'
import userRouter from './src/routes/UserRoute.js';
import AuthorizationMiddleware from './src/middewlare/AuthorizationMiddleware.js';
import checkRoleAuth from './src/middewlare/checkRoleAuth.js';
import  ADMIN  from './src/config/roles.js'


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())

const upload = multer({ dest: './src/upload' })

app.use(upload.any());

app.post('/imagen', ImagenController.addImagen);

app.post('/factura', FacturaController.addFactura);

app.get('/factura/:id_factura', FacturaController.getFacturaTotales);

// routers

app.use('/producto', AuthorizationMiddleware, checkRoleAuth([ADMIN]), productoRouter);

app.use('/movimiento', movimientoRouter);

app.use('/cliente', ClienteRouter);

app.use('/user', userRouter);

export default app;