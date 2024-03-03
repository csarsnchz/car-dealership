import { v4 as uuid } from "uuid";
import { Brand } from "src/brands/entities/brand.entity";

export const BRANDS_SEED: Brand [] = [
    {
        id: uuid(),
        name: 'Toyota',
        created_at: Date.now(),
    },
    {
        id: uuid(),
        name: 'Nissan',
        created_at: Date.now(),
    },
    {
        id: uuid(),
        name: 'Honda',
        created_at: Date.now(),
    },
    {
        id: uuid(),
        name: 'Ford',
        created_at: Date.now(),
    },
    {
        id: uuid(),
        name: 'Chevrolet',
        created_at: Date.now(),
    },
    {
        id: uuid(),
        name: 'Volkswagen',
        created_at: Date.now(),
    },
    {
        id: uuid(),
        name: 'Chery',
        created_at: Date.now(),
    },
    {
        id: uuid(),
        name: 'Geely',
        created_at: Date.now(),
    },
    {
        id: uuid(),
        name: 'Changan',
        created_at: Date.now(),
    }
];