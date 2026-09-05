import { TaskPriority, TaskStatus } from "../models/task.model";

export const tasks = [  {
    id: 1,
    title: "Estudar TypeScript",
    description: "Revisar interfaces e enums",
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    createdAt: new Date(),
  },
];
