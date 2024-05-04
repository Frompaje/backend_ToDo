import { prisma } from "@/database/db";
import { Task, TaskResitory } from "@/interface/task-repository";

export class PrismaTaskRepository implements TaskResitory {
  async create(
    title: string,
    description: string,
    status: string,
    userId: string
  ): Promise<Task> {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        userId,
      },
    });
    return task;
  }

  async delete(userId: string, userTask: string): Promise<Task> {
    const task = await prisma.task.delete({
      where: {
        id: userTask,
        userId,
      },
    });
    return task;
  }
}