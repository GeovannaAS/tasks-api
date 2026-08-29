export enum TaskPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
};

export enum TaskStatus {
  pending = "pending",
  in_progress = "in_progress",
  completed = "completed",
}

export interface Task {
    id : number;
    title : string;
    description : string;
    status: TaskStatus;
    priority: TaskPriority;
    createdAt : Date;
    updatedAt : Date;
    completedAt : Date;
}

export interface CreatedTaskDTO {
    title : string;
    description : string;
    priority : TaskPriority;
}

export interface UpdateTaskDTO {
    title?: string;
    description?: string;
    status?: string;
    priority?: TaskPriority;
}