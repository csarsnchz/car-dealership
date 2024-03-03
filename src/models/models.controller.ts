import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ModelsService } from './models.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';

@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  @MessagePattern('createModel')
  create(@Payload() createModelDto: CreateModelDto) {
    return this.modelsService.create(createModelDto);
  }

  @MessagePattern('findAllModels')
  findAll() {
    return this.modelsService.findAll();
  }

  @MessagePattern('findOneModel')
  findOne(@Payload() id: number) {
    return this.modelsService.findOne(id);
  }

  @MessagePattern('updateModel')
  update(@Payload() updateModelDto: UpdateModelDto) {
    return this.modelsService.update(updateModelDto.id, updateModelDto);
  }

  @MessagePattern('removeModel')
  remove(@Payload() id: number) {
    return this.modelsService.remove(id);
  }
}
