import ProductoService from "../services/ProductoService.js";

const ProductoController = {}


ProductoController.getProducto = async (req,res) => res.send(await ProductoService.getProducto());

ProductoController.getProductoById = async (req,res) => res.send(await ProductoService.getProductoById(req.params.id_producto));

ProductoController.addProducto= async(req,res) => res.send(await ProductoService.addProducto(req.body));

ProductoController.updateProducto= async (req,res)=>res.send(await ProductoService.updateProducto(req.params.id_producto,req.body));

ProductoController.deleteProducto=async(req,res)=>res.send( await ProductoService.deleteCliente(req.params.id_producto));

export default ProductoController;
