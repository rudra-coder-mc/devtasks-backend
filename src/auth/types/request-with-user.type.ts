import { Request } from 'express';
import { JwtUser } from './jwt-payload.type';

export interface RequestWithUser extends Request {
  user: JwtUser;
}
