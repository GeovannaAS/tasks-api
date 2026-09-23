import { Router, Request, Response } from "express";
import { tasks } from "../data/tasks";
import { TaskController } from "../controller/task.controller";

const tasksRoutes = Router();
const taskController = new TaskController();

tasksRoutes.get('/tasks', taskController.list);

tasksRoutes.get('/task/:id', taskController.findById)

tasksRoutes.post('/task', taskController.create)

tasksRoutes.patch('/task/:id', taskController.update)

tasksRoutes.delete('/task/:id', taskController.delete)

export{tasksRoutes}