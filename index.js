import express from 'express';
import router from './routes/weather.js';
import bodyParser from 'body-parser';
import { sequelize } from './db/index.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3002;
app.use(cors({
    origin: '*'
  }));

sequelize.sync()
.then(result =>{
    console.log(result);
}).catch(err=>{
    console.log(err);
});


app.use(bodyParser.json());

app.use('/api/weather',router);



app.get('/api',(req,res)=>{
    res.send('Welcome to my API');
})


app.get("*",(req,res)=>{
    res.status(404)
    .send("There is no content at this route")
});
app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`);
});
export default app;