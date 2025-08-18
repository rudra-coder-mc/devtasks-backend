import { Injectable } from '@nestjs/common';
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
}
