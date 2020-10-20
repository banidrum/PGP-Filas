import sequelize from "sequelize";

const connection = new sequelize('filas','root','root', {
    host:'localhost',
    dialect:'postgres'
})

module.exports = connection;
