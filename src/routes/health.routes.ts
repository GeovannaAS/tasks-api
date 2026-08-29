import {Router} from 'express';

const healthRouter = Router();

healthRouter.get('/health', (req,res)=>{
    return res.status(200).json({
        "status" : "ok",
        "message" : "api rodando com sucesso"
    })
})

export{healthRouter}