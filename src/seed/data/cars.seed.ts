import { v4 as uuid } from 'uuid';
import { Car } from "src/cars/interfaces/car.interface";

export const CARS_SEED: Car [] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla', 
    },
    {
        id: uuid(),
        brand: 'Nissan',
        model: 'Altima',
    },
    {
        id: uuid(),
        brand: 'Honda', 
        model: 'Civic',
    },
    {
        id: uuid(),
        brand: 'Ford', 
        model: 'Focus',
    },
    {
        id: uuid(),
        brand: 'Chevrolet', 
        model: 'Cruze',
    },
    {
        id: uuid(),
        brand: 'Volkswagen', 
        model: 'Jetta',
    },
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Camry', 
    },
    {
        id: uuid(),
        brand: 'Nissan',
        model: 'Maxima',
    },
    {
        id: uuid(),
        brand: 'Honda', 
        model: 'Accord',
    },
    {
        id: uuid(),
        brand: 'Ford', 
        model: 'Fusion',
    },
    {
        id: uuid(),
        brand: 'Chevrolet', 
        model: 'Malibu',
    },
    {
        id: uuid(),
        brand: 'Volkswagen', 
        model: 'Passat',
    }
];