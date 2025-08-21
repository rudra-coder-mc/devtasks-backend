import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) { }

  async getAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async crateTask(title: string): Promise<Task> {

    return this.prisma.task.create({
      data: { title }
    })
  }

  async getById(id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id } })
    if (!task) throw new NotFoundException(`task with id ${id} not found`)
    return task
  }

  async updateTask(id: number, data: Partial<Task>): Promise<Task> {
    return this.prisma.task.update({
      where: { id },
      data
    })
  }

  async deleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: { id }
    })
  }

}
