import IUser from '../models/IUser';
import userService from '../service/userService';

const userController = {
    registerUser(req, res) {
        // const user: IUser = req.body.user;

        const user = req.body.user;

        userService.createUser(user)
        .then((result) => {
            return result;
        })
        .catch(err => {
            return err;
        });

        return res.json("User created.");
    },

    logon(req,res){
        const login = req.body.user
        userService.entrar(login)
        .then((result) => {
            return result;
        })
        .catch(err => {
            return err;
        });
    }
}

export default userController;