import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
    ) {}

   @Get()
     getAllCars() {
       return this.carsService.findAll();
     }

    @Get('random')
    getRandomCar() {
        return {car:this.carsService.findRandom()};
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        return {car:this.carsService.findOne( id )};
    }

    @Post()
    createCar( @Body() createCarDto: CreateCarDto ) {
      return {car: this.carsService.create(createCarDto)};
    }
  
    @Patch(':id')
    updateCar( 
      @Param('id', ParseUUIDPipe) id: string, 
      @Body() updateCarDto: UpdateCarDto ) 
    {
      return this.carsService.update(id, updateCarDto);
    }
  
    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe ) id: string ) {
      return this.carsService.delete(id);
    }
}
