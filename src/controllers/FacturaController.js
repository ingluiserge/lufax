import FacturaService from "../services/FacturaService.js";

const FacturaController = {}

FacturaController.addFactura = async (req, res) => res.send(await FacturaService.addFactura(req.body));

export default FacturaController;