import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db', 'root', 'Styawan_indra_25', {
    host: "localhost",
    dialect: "mysql"
});

export default db;