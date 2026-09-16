import { TaskService } from "../service/task.service";
import { Response, Request } from "express";
import { CreatedTaskDTO, TaskPriority, TaskStatus } from "../models/task.model";

export class TaskController {
  private taskService = new TaskService();
  create = (req: Request, res: Response) => {
    try {
      const { title, description, priority } = req.body as CreatedTaskDTO;
      if (!title || !description || !priority) {
        return res.status(400).json({
          message: "the 'title', 'description' and 'pritority' are required",
        });
      }
      const isValidPriority = Object.values(TaskPriority).includes(
        priority as TaskPriority,
      );
      if (!isValidPriority) {
        return res.status(400).json({
          message: "invalid priority",
        });
      }
      const novatask = this.taskService.create({
        title,
        description,
        priority: priority as TaskPriority,
      });
      return res.status(201).json(novatask);
    } catch (error) {
      return res.status(400).json({
        message: "error : task not created",
      });
    }
  };
  list = (req: Request, res: Response) => {
    const allowedFilters = ["status", "priority"];
    const receivedFilters = Object.keys(req.query);
    const hasInvalidFilters = receivedFilters.some(
      (filter) => !allowedFilters.includes(filter),
    );

    if (hasInvalidFilters) {
      return res.status(400).json({
        "message" : "Invalid Filter Paramter",
      });
    }
    const { status, priority } = req.query;

    if (
      status !== undefined &&
      !Object.values(TaskStatus).includes(status as TaskStatus)
    ) {
      return res.status(400).json({
        "message" : "Invalid Status",
      });
    }

    if (
      priority !== undefined &&
      !Object.values(TaskPriority).includes(priority as TaskPriority)
    ) {
      return res.status(400).json({
        "message" : "Invalid Priority",
      });
    }

    const tasksList = this.taskService.list(priority as TaskPriority | undefined, status as TaskStatus | undefined);
    return res.status(200).json(tasksList);

  };
  findById = (req: Request, res: Response): Response => {
    try {
      const id = Number(req.params.id);
      if (Number.isNaN(id)) {
        return res.status(400).json({
          "message" : "id must be a number",
        });
      }
      const task = this.taskService.findById(id);
      if (!task) {
        return res.status(404).json({
          "message" : "task not found",
        });
      }
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({
        "message" : "internal server error",
      });
    }
  };
  update = () => {};
  delete = () => {};
}
