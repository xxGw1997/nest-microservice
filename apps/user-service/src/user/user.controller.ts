import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  @MessagePattern('get_user')
  getUser(id: number) {
    return { id, name: 'John Doe' };
  }
}
