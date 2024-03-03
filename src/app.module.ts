import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandsModule, DevtoolsModule.register({
    http: process.env.NODE_ENV !== 'production',
  }), SeedModule,],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
