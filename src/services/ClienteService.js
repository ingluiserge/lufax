import query from '../config/db.js';

const ClienteService = {}

ClienteService.getClientes = async (req, res) => {
    var sql = 'select * from cliente';
    const clientes = await query(sql);
    return clientes;
};

ClienteService.addCliente = async (data, response) => {

    const { id_cliente, nombre, apellido, direccion, telefono, email } = data;

    var sql = `INSERT INTO cliente (id_cliente, nombre, apellido,direccion,telefono,email) VALUES (?, ?, ?,?,?,?)`;
    const resp = await query(sql, [id_cliente, nombre, apellido, direccion, telefono, email])
    return "ok";
};

ClienteService.updateCliente = async (id_cliente, { nombre, apellido, direccion, telefono, email }) => {

    var sql = `UPDATE cliente SET nombre = ? , apellido = ?, direccion= ? , telefono = ?, email = ?  WHERE id_cliente = ? `;
    const resp = await query(sql, [nombre, apellido, direccion, telefono, email, id_cliente])
    return "Cliente Actualizado"
};

ClienteService.deleteCliente = async (id_cliente) => {

    var sql = `DELETE FROM cliente WHERE id_cliente = ? `;
    var resp = await query(sql, [id_cliente])
    return "Cliente Eliminado"
};

export default ClienteService;