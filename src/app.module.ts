import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { ModelsModule } from './models/models.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [CarsModule, BrandsModule, ModelsModule, DevtoolsModule.register({
    http: process.env.NODE_ENV !== 'production',
  }),],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
