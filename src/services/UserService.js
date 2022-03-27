import query from '../config/db.js';
import bcryptjs from 'bcrypt'
import RoleUserService from './RoleUserService.js';
import jwt from 'jsonwebtoken';

const UserService = {}


UserService.getFindUser = async (req, res) => {
    var sql = 'select  id_user from user order by id_user desc limit 1;';
    const userid = await query(sql);
    return userid[0];
};

UserService.addUser = async (data, response) => {

    const { nombre_user, correo, password, items } = data;

    let passwordcryp = await bcryptjs.hash(password, 8);
    var sql = `INSERT INTO user (nombre_user, correo, password) VALUES (?, ?, ?)`;
    const resp = await query(sql, [nombre_user, correo, passwordcryp])

    items.forEach(async item => {

        const x = await UserService.getFindUser();
        const id_user = x;
        await RoleUserService.addRoleUser(id_user, item)

    });

    return "User Registrado";
};

UserService.EmailinUse = async (correo) => {
    var sql = 'select id_user from user where correo = ?';
    const user = await query(sql, [correo]);
    return user[0];
};

UserService.login = async ({ email, pass }) => {

    let passwordcryp = await bcryptjs.hash(pass, 8);
    
    const result = await query('select password from user where correo = ?', [email, passwordcryp]);

    const userHash = result[0].password;

    const areEquals = await bcryptjs.compare(pass, userHash);

    if (areEquals) {
        var token = jwt.sign({ correo: email }, 'mi-llave-secreta');
        return { token };
    }

    return { message: "credentials invalid" };
};


export default UserService;