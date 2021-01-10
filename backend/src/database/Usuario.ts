import sequelize from "sequelize";
// @ts-ignore
import connection from "./database";

const Usuario = connection.define('usuario',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
    },
    nome:{
        type:sequelize.STRING,
        allowNull:false
    },
    email:{
        type:sequelize.STRING,
        allowNull:false
    },
    matricula:{
        type:sequelize.STRING,
        allowNull:false
    },
    password:{
        type:sequelize.STRING,
        allowNull:false
    }
})

Usuario.sync({force: false})

export default Usuario;