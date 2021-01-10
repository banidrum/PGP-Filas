
import userService from '../service/userService';
import Usuario from "../database/Usuario";
import bcrypt from 'bcrypt';

const userController = {
    registerUser(req, res) {
        const user = req.body.user;

        Usuario.findOne({
            where:{
                email:user.email,
            }
        }).then(usuario =>{
            if(!usuario){
                userService.createUser(user)
                .then((result) => {
                    return res.json("Usuário criado com sucesso!");
                })
                .catch(err => {
                    return res.json("Houve um erro ao criar o cadastro!");
                });
            }else{
                return res.json("Usuario já existe, favor realize a conexão!");
            }
        })
    },

    logon(req,res){
        const user = req.body.user
        Usuario.findOne({
            where:{
                email:user.email,
            }
        }).then(usuario =>{
            if (!usuario) {
                return res.json({
                    success:false,
                    message:"Usuario não existe, favor realize o cadastro!"
                });
            }
            // @ts-ignore
            let oldPassword = usuario.password;
            // @ts-ignore
            let id = usuario.id;
            // @ts-ignore
            let name = usuario.nome;
            // @ts-ignore
            let email = usuario.email;
            //@ts-ignore
            let role = usuario.role;

            let checkPassword = bcrypt.compareSync(user.password, oldPassword);

            if (!checkPassword) {
                return res.json({
                    success:false,
                    message:"Senha incorreta"
                });
            }else{
                req.session.usuario = {
                    id: id,
                    name: name,
                    email: email,
                    role: role,
                }
                res.json({
                    success:true,
                    user:req.session.usuario
                })
            }
        })
    },

    logout(req,res){
        req.session.usuario = undefined;
        return res.json("usuário deslogado com sucesso!");
    }
}

export default userController;