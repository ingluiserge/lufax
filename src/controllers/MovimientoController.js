import MovimientoService from "../services/MovimientoService.js";

const MovimientoController={}

MovimientoController.getMovimiento=async(req,res)=>res.send(await MovimientoService.getMovimientos());
MovimientoController.addMovimiento=async(req,res)=>res.send(await MovimientoService.addMovimientos(req.body));

export default MovimientoController;