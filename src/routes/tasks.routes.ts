import { Router, Request, Response } from "express";
import { tasks } from "../data/tasks";
import { TaskController } from "../controller/task.controller";

const tasksRoutes = Router();
const taskController = new TaskController();

tasksRoutes.get('/tasks', (req:Request, res: Response)=>{
    return res.json(tasks);
});

tasksRoutes.get('/task/:id', taskController.findById)

export{tasksRoutes}