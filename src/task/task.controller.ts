import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateTaskDto } from './dto/update-task.dto';

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

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by I' })
  @ApiResponse({ status: 200, description: 'Task found' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getById(id)
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  create(@Body() body: CreateTaskDto) {
    return this.taskService.crateTask(body.title)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a task' })
  @ApiResponse({ status: 200, description: 'Task updated successfully' })
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateTaskDto) {
    return this.taskService.updateTask(id, body)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  @ApiResponse({ status: 200, description: 'Task deleted successfully' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.deleteTask(id)
  }
}
