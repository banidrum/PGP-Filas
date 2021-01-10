// @ts-ignore
import { Sequelize } from "sequelize";

const connection = new Sequelize('filas','postgres','root', {
    host:'localhost',
    dialect:'postgres'
});

export default connection;
