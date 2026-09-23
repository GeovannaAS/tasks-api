import { tasks } from "../data/tasks";
import {
  CreatedTaskDTO,
  Task,
  TaskStatus,
  TaskPriority,
  UpdateTaskDTO,
} from "../models/task.model";

export class TaskService {
  create({ title, description, priority }: CreatedTaskDTO) {
    const newId =
      tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
    const newTask: Task = {
      id: newId,
      title,
      description,
      priority,
      status: TaskStatus.PENDING,
      createdAt: new Date(),
    };
    tasks.push(newTask);
    return newTask;
  }

  list(priority?: TaskPriority, status?: TaskStatus): Task[] {
    let filteredTasks = [...tasks];

    if (priority) {
      filteredTasks = filteredTasks.filter(
        (task) => priority === task.priority,
      );
    }
    if (status) {
      filteredTasks = filteredTasks.filter((task) => status === task.status);
    }

    return filteredTasks.sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    );
  }

  findById(id: number): Task | undefined {
    return tasks.find((task) => task.id === id);
  }

  update(id: number, dataUpdate: UpdateTaskDTO) {
    let hasUpdated = false;

    const task = this.findById(id);

    if (!task) {
      return undefined;
    }

    if (dataUpdate.title !== undefined) {
      task.title = dataUpdate.title;
      hasUpdated = true;
    }

    if (dataUpdate.status !== undefined) {
      task.status = dataUpdate.status;
      hasUpdated = true;
    }

    if (dataUpdate.priority !== undefined) {
      task.priority = dataUpdate.priority;
      hasUpdated = true;
    }

    if (dataUpdate.description !== undefined) {
      task.description = dataUpdate.description;
      hasUpdated = true;
    }

    if (dataUpdate.status === TaskStatus.COMPLETED) {
      task.completedAt = new Date();
    } else {
      task.completedAt = undefined;
    }

    if (hasUpdated) {
      task.updatedAt = new Date();
    }

    return task;
  }

  delete(taskId: number) {
    const deleteIndex = tasks.findIndex((task) => task.id === taskId);
    if (deleteIndex === -1) {
      return false;
    }
    tasks.splice(deleteIndex, 1);
    return true;
  }
}
