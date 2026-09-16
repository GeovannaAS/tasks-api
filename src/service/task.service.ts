import { tasks } from "../data/tasks";
import { CreatedTaskDTO, Task, TaskStatus, TaskPriority } from "../models/task.model";


export class TaskService {
    create({title, description, priority}: CreatedTaskDTO){
        const newId = tasks.length > 0 ? Math.max(...tasks.map(task=> task.id)) + 1 : 1;
        const newTask : Task = {
            id: newId, 
            title, 
            description, 
            priority, 
            status : TaskStatus.PENDING,
            createdAt: new Date
        }
        tasks.push(newTask);
        return newTask;
    }
    list(priority?:TaskPriority, status?: TaskStatus): Task[] {
        let filteredTasks = [...tasks];

        if(priority){
            filteredTasks = filteredTasks.filter(task => priority === task.priority)
        }
        if(status){
            filteredTasks = filteredTasks.filter(task => status === task.status)
        }

        return filteredTasks.sort((a,b) => a.createdAt.getTime() - b.createdAt.getTime());
    }
    findById(id:number): Task | undefined{
        return tasks.find(task=> task.id === id)
    }
    update(){}
    delete(){}
}



