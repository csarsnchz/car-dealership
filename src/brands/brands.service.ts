import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
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
    }
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      created_at: Date.now(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map( brand => {
      if (brand.id === id) {
        brandDB.updated_at = Date.now();
        brandDB = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return brand;
      });
  }

  remove(id: string) {
    const brand = this.findOne(id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    this.brands = this.brands.filter(brand => brand.id !== id);
  }
}
