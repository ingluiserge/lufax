import query from '../config/db.js';
import multer from 'multer';
import fs from 'fs';

const ImageProductoService = {}

const upload = multer({ dest: './src/upload' })


ImageProductoService.addImageProducto = async ({ oldName, newName, url, id_producto }) => {

    fs.renameSync(oldName, newName)
    var sql = `INSERT INTO image_producto (url,id_producto) VALUES (?, ?)`;
    const resp = await query(sql, [url, id_producto]);

    return { response : "OK" }
};

export default ImageProductoService;