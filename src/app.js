import multer from 'multer';
import express from 'express';
import cors from 'cors';
import ClienteRouter from './routes/ClienteRoute.js'
import productoRouter from './routes/ProductoRoute.js';
import movimientoRouter from './routes/MovimientoRoute.js';
import FacturaController from './controllers/FacturaController.js';
import ImagenController from './controllers/ImagenController.js';
import bodyParser from 'body-parser'
import userRouter from './routes/UserRoute.js';
import AuthorizationMiddleware from './middewlare/AuthorizationMiddleware.js';
import checkRoleAuth from './middewlare/checkRoleAuth.js';
import  ADMIN  from './config/roles.js'


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