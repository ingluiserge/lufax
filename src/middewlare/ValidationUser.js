import { check } from "express-validator";
import ValidateResult from "../helpers/ValidateHelper.js";
import UserService from "../services/UserService.js";


const ValidateCreateUser = [

    check('nombre_user').exists().not().isEmpty().withMessage("el nombre del usuario es requerido"),
    check('correo').exists().isEmail().custom(async correo => {
        const value = await UserService.EmailinUse(correo);
        if (value) {
            throw new Error("correo ya existe");
        }
    }),
    check('password').exists().not().isEmpty(),
    (req, res, next) => {
        ValidateResult(req, res, next)
    }
]


export default ValidateCreateUser;