import { TaskService } from "../service/task.service"
import {Response, Request} from "express"

export class TaskController{
    private taskService = new TaskService()
    create = ()=>{}
    list = ()=>{}
    findById = (req:Request, res:Response): Response =>{
        try {
            const id = Number(req.params.id)
            if(Number.isNaN(id)){
                return res.status(400).json({
                    "message" : "id must be a number"
                })
            }
            const task = this.taskService.findById(id);
            if(!task){
                return res.status(404).json({
                    "message" : "task not found"
                })
            }
            return res.status(200).json(task)
        } catch (error) {
            return res.status(500).json({
                "message" : "internal server error"
            })
        }
    }
    update = ()=>{}
    delete = ()=>{}
}