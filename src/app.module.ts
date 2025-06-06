import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { ProductsModule } from './products/products.module';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CompaniesModule, ProductsModule, AuthModule],
})
export class AppModule {}
