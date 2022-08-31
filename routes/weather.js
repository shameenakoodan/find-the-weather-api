import Router from 'express';
import bodyParser from "body-parser";


import { 
    addWeather,
    getWeatherList,
    getWeatherById,
    getByCityId
} from '../controllers/weatherController.js';

const router = Router();

router.get("/",(req,res) => getWeatherList(req,res));
router.post("/",(req,res) => addWeather(req,res));
router.get("/:id",(req,res)=>getWeatherById(req,res));
router.get("/cityid/:city_num",(req,res)=>getByCityId(req,res));

export default router;