import sequelize from "sequelize";
import { Sequelize } from "sequelize";

const connection = new Sequelize('filas','root','root', {
    host:'localhost',
    dialect:'postgres'
});

export default connection;
