import Usuario from '../database/Usuario';
import bcrypt from 'bcrypt';

const userService = {

 async createUser (user) {

     let salt = bcrypt.genSaltSync(10);
     let hash = bcrypt.hashSync(user.password,salt);

    const createUser = await Usuario.create({
        nome: user.nome,
        email: user.email,
        matricula: user.matricula,
        password: hash
    });

    return createUser;
},
}

export default userService;