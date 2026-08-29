import { Router, Request, Response } from "express";
import { tasks } from "../data/tasks";

const tasksRoutes = Router();

tasksRoutes.get('/tasks', (req:Request, res: Response)=>{
    return res.json(tasks);
});

export{tasksRoutes}