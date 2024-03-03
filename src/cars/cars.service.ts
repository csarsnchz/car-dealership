import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import {CreateCarDto, UpdateCarDto} from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla', 
        // },
        // {
        //     id: uuid(),
        //     brand: 'Nissan',
        //     model: 'Altima',
        // },
        // {
        //     id: uuid(),
        //     brand: 'Honda', 
        //     model: 'Civic',
        // },
        // {
        //     id: uuid(),
        //     brand: 'Ford', 
        //     model: 'Focus',
        // },
        // {
        //     id: uuid(),
        //     brand: 'Chevrolet', 
        //     model: 'Cruze',
        // },
        // {
        //     id: uuid(),
        //     brand: 'Volkswagen', 
        //     model: 'Jetta',
        // }  
    ];

    findAll() {
        return this.cars;
    }

    findOne(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

    findRandom() {
        const randomIndex = Math.floor(Math.random() * this.cars.length);
        return this.cars[randomIndex];
    }

    create(createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        };
        this.cars.push(car);
        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        let carDB = this.findOne(id);
        this.cars.map(car => car.id === id ? carDB = {...carDB, ...updateCarDto,id}  : car);
        return carDB;
    }

    delete(id: string) {
        const car = this.findOne(id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        this.cars = this.cars.filter(car => car.id !== id);
        return {message: `Car with id ${id} deleted`};
    }

    executePopulateFromSeed( cars: Car[] ) {
        this.cars = cars;
      }
}
