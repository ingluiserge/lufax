import ClienteService from "../services/ClienteService.js";

const ClienteController = {}



ClienteController.getCliente = async (req,res) => res.send(await ClienteService.getClientes());

ClienteController.addCliente= async (req,res) => res.send(await ClienteService.addCliente(req.body));

ClienteController.updateCliente=async(req,res)=>res.send(await ClienteService.updateCliente(req.params.id_cliente,req.body));

ClienteController.deleteCliente=async (req,res)=>res.send( await ClienteService.deleteCliente(req.params.id_cliente));

export default ClienteController;