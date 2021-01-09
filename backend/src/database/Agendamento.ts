import sequelize from "sequelize";
// @ts-ignore
import connection from "./database";

import usuario from './Usuario';

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
            model: usuario,
            key: 'id'
        }
    },
    local:{
        type:sequelize.STRING,
        allowNull:false
    },
    servico:{
        type:sequelize.STRING,
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

// usuario.hasMany(Agendamento);
// Agendamento.belongsTo(usuario, {
//     foreignKey: 'id'
// });

Agendamento.sync({force: false})

export default Agendamento;