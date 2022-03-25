import query from '../config/db.js';
import bcryptjs from 'bcrypt'
import RoleUserService from './RoleUserService.js';


const UserService = {}


UserService.getFindUser = async (req, res) => {
    var sql = 'select  id_user from user order by id_user desc limit 1;';
    const userid = await query(sql);
    return userid;
};



UserService.addUser= async (data, response) => {

    const { nombre_user, correo,password,items} = data;

    let passwordcryp = await bcryptjs.hash(password,8);
    var sql = `INSERT INTO user (nombre_user, correo, password) VALUES (?, ?, ?)`;
    const resp = await query(sql, [nombre_user, correo, passwordcryp])

        
        
        items.forEach( async item => {

            const x = await UserService.getFindUser();
            const  id_user= x[0];
            await RoleUserService.addRoleUser(id_user,item)

        });

        return "User Registrado";
   
    
};

 UserService.EmailinUse = async (correo) => {
    var sql = 'select id_user from user where correo = ?';
    const user = await query(sql,[correo]);
    return user;
};


export default UserService;