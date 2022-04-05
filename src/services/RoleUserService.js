import query from '../config/db.js';

const RoleUserService = {}



RoleUserService.addRoleUser = async ({id_user}, {id_role})=> {


    var sql = `INSERT INTO role_user (id_user,id_role) VALUES (?, ?)`;
    const resp = await query(sql, [id_user, id_role])
    return "ok";
};

export default RoleUserService;