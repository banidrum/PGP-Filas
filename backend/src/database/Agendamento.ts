import sequelize from "sequelize";
// @ts-ignore
import connection from "./database";

const Agendamento = connection.define('agendamento',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
    },
    id_usuario:{
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario',
            key: 'id'
        }
    },
    local:{
        type:sequelize.TEXT,
        allowNull:false
    },
    servico:{
        type:sequelize.TEXT,
        allowNull:false
    },
    data:{
        type:sequelize.DATE,
        allowNull:false
    },
    createdAt: {
        allowNull: false,
        type: sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: sequelize.DATE
    }
})

Agendamento.sync({force: false})

export default Agendamento;