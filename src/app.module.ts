import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TaskModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
