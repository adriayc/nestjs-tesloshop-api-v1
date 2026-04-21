import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class SeedService {
  constructor(private readonly productService: ProductsService) {}

  async runSeed() {
    await this.insertNewProduct();

    return 'Seed executed!';
  }

  private async insertNewProduct() {
    await this.productService.deleteAllProduct();

    return true;
  }
}
