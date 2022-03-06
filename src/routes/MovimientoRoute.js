import { Router } from "express";
import MovimientoController from "../controllers/MovimientoController.js"

const movimientoRouter = Router();

movimientoRouter.get('/',MovimientoController.getMovimiento);

movimientoRouter.post('/',MovimientoController.addMovimiento);

export default movimientoRouter;