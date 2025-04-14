import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  @MessagePattern('create_order')
  createOrder(order: any) {
    console.log('Message: Order received on the order microservice', order);
    return { message: 'Order created successfully', order };
  }
}
