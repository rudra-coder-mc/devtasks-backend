import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const updateTaskSchema = z.object({
	title: z.string().min(1, 'Title is required').optional(),
	completed: z.boolean().optional()
});

export class UpdateTaskDto extends createZodDto(updateTaskSchema) { }


