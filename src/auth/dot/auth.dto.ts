import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const AuthSchema = z.object({
  email: z.string().email('require vaild email'),
  password: z.string().min(8, 'password must be 8 char long')
});

export class AuthDto extends createZodDto(AuthSchema) { }
