import FacturaService from "../services/FacturaService.js";

const FacturaController = {}

FacturaController.addFactura = async (req, res) => res.send(await FacturaService.addFactura(req.body));
FacturaController.getFacturaTotales= async(req,res)=> res.send(await FacturaService.getFacturasTotal(req.params.id_factura));

export default FacturaController;