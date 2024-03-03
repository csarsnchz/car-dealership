import { Injectable } from '@nestjs/common';
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
    return 'This action adds a new brand';
  }

  findAll() {
    return `This action returns all brands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
