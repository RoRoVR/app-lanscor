import { request, response } from "express";
import User from "../models/User.js";


export const userRegister = async(req = request, res = response) => {
    const newUser = new User(req.body);

    await newUser.save();

    res.status(201).json({
        msg: "Usuario registrado exitosamente"
    });
}

export const userLogin = async( req=request, res=response ) => {
    const {user_name, password} = req.body;

    const user = await User.findOne({user_name});
    if(user){
        if(user.password === password){

            return res.status(200).json({
                name: user.name,
                last_name: user.last_name,
                ci: user.ci,
                user_name: user.user_name,
            })
        }else return res.status(401).json({msg: "Contraseña incorrecta"})
    }else res.status(404).json({msg: "No se encontro el nombre de usuario"});
}