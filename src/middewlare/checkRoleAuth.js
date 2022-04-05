import jwt from "jsonwebtoken";

const checkRoleAuth = (rols) => (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const tokenData = jwt.verify(token, 'mi-llave-secreta');

    let hasPermission = false;
    const myRoles = tokenData.rol.map(r => r.nombre_role);

    for(const myRole of myRoles){      
      if(rols.some(r => r == myRole)){
        hasPermission = true;
      }
    } 
    
    if (!hasPermission) {
      res.status(401)
      res.send("Usuario no tiene estos privilegios");
    } 

    next();

  } catch (e) {
    console.log(e)
    res.status(409)
    res.send({ error: 'Tu por aqui no pasas!' })
    return;
  }

}

export default checkRoleAuth;