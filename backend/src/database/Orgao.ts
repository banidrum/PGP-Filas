import sequelize from "sequelize";
// @ts-ignore
import connection from "./database";

const Orgao = connection.define('orgao',{
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
    telefone:{
        type:sequelize.STRING,
        allowNull:false
    },
    endereco:{
        type:sequelize.STRING,
        allowNull:false
    }
})

Orgao.sync({force: false})

export default Orgao;