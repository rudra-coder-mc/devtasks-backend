import { Injectable, NotFoundException } from '@nestjs/common'; import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) { }

  async getAll(userId: number): Promise<Task[]> {
    return this.prisma.task.findMany({ where: { userId } });
  }

  async crateTask(title: string, userId: number): Promise<Task> {
    return this.prisma.task.create({
      data: { title, userId }
    })
  }

  async getById(id: number, userId: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id, userId } })
    if (!task) throw new NotFoundException(`task with id ${id} not found`)
    return task
  }

  async updateTask(id: number, data: Partial<Task>, userId: number): Promise<Task> {
    return this.prisma.task.update({
      where: { id, userId },
      data
    })
  }

  async deleteTask(id: number, userId: number): Promise<Task> {
    return this.prisma.task.delete({
      where: { id, userId }
    })
  }

}
