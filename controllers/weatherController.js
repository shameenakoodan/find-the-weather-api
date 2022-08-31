import {Weather} from "../models/weatherModel.js";
export const getWeatherList = (req,res)=>{
    Weather.findAll().then(weather=>{
        res.status(200).send(weather)})
        .catch(err=>{
            console.log(err);
        })
}
export const getWeatherById = (req,res)=>{
    const id = parseInt(req.params.id);
    Weather.findByPk(id)
    .then(weather=>{
        if(weather != null)
        res.status(200)
        .send(weather)
        else{
            res.status(200).send('null');
        }
    })
    .catch(err=>{
        console.log(err);
})
}
/*export const addWeather = (req,res)=>{
    const newWeather ={
        id:req.body.id,
        name:req.body.name,
        temp:req.body.temp
    };
    console.log(newWeather);
    /*weatherArray.push(newWeather);
    res.status(201).send({
        message:"Weather Added"
    })
    Weather.create({
        name:req.body.name,
        temp:req.body.temp
    })
    .then(()=>{
        res.status(201).send(
            {message:"Created"}
        );
    }).catch(err=>{
        console.log(err);
    })
}*/

//Add the values from the appilcation to the database
export const addWeather = (req, res) => {
    Weather.create({
      city_num:req.body.city_num,
      city_name:req.body.city_name,
      temperature:req.body.temperature,
      feels_like:req.body.feels_like,
      description:req.body.description,
      wind:req.body.wind,
      pressure:req.body.pressure,
      high:req.body.high,
      low:req.body.low
    })
    .then(()=>{
      res.status(201).send({message:"Created"});
    }).catch(err =>{
      console.log(err);
    })
  };

  //Get By city Id
  export const getByCityId = (req, res) => {
    const city_num = req.params.city_num;
    Weather.findAll({where:{city_num:city_num}}).then(weather =>{
      res.status(200).send(weather)})
      .catch(err=>{
        console.log(err)
      })
  };