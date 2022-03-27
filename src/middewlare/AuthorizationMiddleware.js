import jwt from "jsonwebtoken";


const AuthorizationMiddleware = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    let tokenValue = false;
    try {
        tokenValue = jwt.verify(token, 'mi-llave-secreta');    
    } catch (error) {
        tokenValue = false;
    }    

    if (tokenValue) {
        next();
    } else {
        res.status(401)
        res.send({ errors: "user unauthorized" })
    }
}


export default AuthorizationMiddleware;