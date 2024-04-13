import { Router } from "express";
import { body } from "express-validator";

import { userLogin, userRegister } from "../controllers/auth.controller.js";
import { validateFields } from "../middlewares/validation.js";

const auth = Router();

auth.post('/register',[
    body('name')
        .trim().notEmpty().withMessage('El nombre de usuario es obligatorio'),
    body('last_name')
        .trim().notEmpty().withMessage('El apellido es obligatorio'),
    body('ci')
        .trim().notEmpty().withMessage('El número de cedula de identidad es obligatorio')
        .isNumeric().withMessage('El número de cedula solo puede contener números'),
    body('user_name')
        .trim().notEmpty().withMessage('El nombre de usuario es obligatorio'),
    body('password')
        .trim().notEmpty().withMessage('La contraseña es obligatoria'),
    validateFields
], userRegister);

auth.post('/login', [
    body('user_name')
    .trim().notEmpty().withMessage('El nombre de usuario es requerido'),
    body('password')
    .trim().notEmpty().withMessage('La contraseña de usuario es requerida'),
    validateFields
], userLogin);

export default auth;
