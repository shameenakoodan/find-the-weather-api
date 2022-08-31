import {Sequelize} from "sequelize";
import { sequelize } from "../db/index.js";

export const Weather = sequelize.define("weather",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    city_num:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    city_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    temperature:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    feels_like:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    wind:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    pressure:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    high:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    low:{
        type:Sequelize.FLOAT,
        allowNull:false
    }
})