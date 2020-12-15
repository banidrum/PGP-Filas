import sequelize from "sequelize";
import { Sequelize } from "sequelize";

const connection = new Sequelize('filas','postgres','root', {
    host:'localhost',
    dialect:'postgres'
});

export default connection;
