export enum TaskPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
};

export enum TaskStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
}

export interface Task {
    id : number;
    title : string;
    description : string;
    status: TaskStatus;
    priority: TaskPriority;
    createdAt : Date;
    updatedAt?: Date;
    completedAt?: Date;
}
//usuario
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