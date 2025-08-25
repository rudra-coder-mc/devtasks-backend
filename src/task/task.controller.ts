import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request, UseGuards, UsePipes } from '@nestjs/common'; import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import type { RequestWithUser } from 'src/auth/types/request-with-user.type';

@Controller('task')
@ApiTags('Tasks')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'List of tasks' })
  getAll(@Request() req: RequestWithUser) {
    return this.taskService.getAll(req.user.userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by I' })
  @ApiResponse({ status: 200, description: 'Task found' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  getById(@Param('id', ParseIntPipe) id: number, @Request() req: RequestWithUser) {
    return this.taskService.getById(id, req.user.userId)
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  create(@Body() body: CreateTaskDto, @Request() req: RequestWithUser) {
    return this.taskService.crateTask(body.title, req.user.userId)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a task' })
  @ApiResponse({ status: 200, description: 'Task updated successfully' })
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateTaskDto, @Request() req: RequestWithUser) {
    return this.taskService.updateTask(id, body, req.user.userId)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  @ApiResponse({ status: 200, description: 'Task deleted successfully' })
  delete(@Param('id', ParseIntPipe) id: number, @Request() req: RequestWithUser) {
    return this.taskService.deleteTask(id, req.user.userId)
  }
}
