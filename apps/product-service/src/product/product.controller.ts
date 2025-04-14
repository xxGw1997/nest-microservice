import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  @MessagePattern('get_product')
  getProduct(id: number) {
    return {
      name: `Product ID: ${id}`,
      price: 100,
      description: 'This is a product',
    };
  }
}
