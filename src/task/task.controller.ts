import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { TaskService } from './task.service';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { CreateTaskDto, CreateTaskSchema } from './dto/create-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('task')
@ApiTags('Tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'List of tasks' })
  getAll() {
    return this.taskService.getAll()
  }

  @Post()
  @UsePipes(new ZodValidationPipe(CreateTaskSchema))
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  create(@Body() body: CreateTaskDto) {
    return this.taskService.crateTask(body.title)
  }
}
