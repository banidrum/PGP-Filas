import Usuario from '../database/Usuario';
import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt';
import passport from 'passport';

const userService = {

 async createUser (user) {
    
    const createUser = await Usuario.create({
        nome: user.name,
        email: user.email,
        matricula: user.matricula
    });

    return createUser;
},
    async entrar(loginData){
        passport.use(
            new LocalStrategy({usernameField:'email'},(email,password,done)=>{
            // @ts-ignore
            Usuario.findOne({email:loginData.email})
            .then((usuario) => {
                if(!usuario){
                    return done(null, false,{message:"Esse usuário não existe!"});
                }

                bcrypt.compare(password, loginData.password, (error, success)=>{
                    if (success){
                        return done(null, usuario)
                    }
                    return done(null, false,{message:"Verifique a senha e tente novamente!"});
                })

            })
        }))
    }

}

export default userService;