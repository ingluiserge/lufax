
import ImageProductoService from "../services/ImageProductoService.js";
import  path  from 'path';


const ImagenController = {}

ImagenController.addImagen = async (req, res) => res.send(await ImageProductoService.addImageProducto({
    ...req.body,
    oldName: req.files[0].path,
    newName: req.files[0].path + path.parse(req.files[0].originalname).ext,
    url: "./src/upload/" + req.files[0].filename + path.parse(req.files[0].originalname).ext,    
}));


export default ImagenController;