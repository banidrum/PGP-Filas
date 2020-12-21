import Usuario from '../database/Usuario';

const userService = {

 async createUser (user) {
    
    const createUser = await Usuario.create({
        nome: user.name,
        email: user.email,
        matricula: user.matricula
    });

    return createUser;
}

}

export default userService;