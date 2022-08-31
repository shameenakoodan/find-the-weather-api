import {Sequelize} from "sequelize";

export const sequelize = new Sequelize("weather_db","root","password",{
    dialect:"mysql",
    host:"localhost",

});