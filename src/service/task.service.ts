import { tasks } from "../data/tasks";
import { Task } from "../models/task.model";

export class TaskService {
    create(){}
    list(){}
    findById(id:number): Task | undefined{
        return tasks.find(task=> task.id === id)
    }
    update(){}
    delete(){}
}