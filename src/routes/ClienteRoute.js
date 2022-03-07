import { Router } from "express";
import ClienteController from "../controllers/ClienteController.js"

const  ClienteRouter = Router();

ClienteRouter.get('/', ClienteController.getCliente);

ClienteRouter.post('/', ClienteController.addCliente);

ClienteRouter.put('/:id_cliente', ClienteController.updateCliente);

ClienteRouter.delete('/:id_cliente', ClienteController.deleteCliente);



export default ClienteRouter;