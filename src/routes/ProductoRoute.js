import { Router } from "express";
import ProductoController from "../controllers/ProductoController.js";
import cacheluf from "../middewlare/cachingMid.js";

const productoRouter = Router();

productoRouter.get('/',cacheluf,ProductoController.getProducto);

productoRouter.get('/:id_producto', ProductoController.getProductoById);

productoRouter.post('/', ProductoController.addProducto);

productoRouter.put('/:id_producto', ProductoController.updateProducto);

productoRouter.delete('/:id_producto', ProductoController.deleteProducto);

export default productoRouter;