import Router from 'express';

const router = Router();

const weatherArray = [20.3,44,55];

router.get("/",(req,res)=>{
    res.status(200).send({
        weather:weatherArray
    });
});

export default router;