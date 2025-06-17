import { Injectable } from '@nestjs/common';
import { CreateFurnitureDto } from './dto/create-furniture.dto';
import { UpdateFurnitureDto } from './dto/update-furniture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Furniture } from './entities/furniture.entity';

@Injectable()
export class FurnitureService {

  constructor(
    @InjectRepository(Furniture)
    private furnitureRepository: Repository<Furniture>,
  ) {}

  create(createFurnitureDto: CreateFurnitureDto) {
    return this.furnitureRepository.save(createFurnitureDto);
  }

  findAll() {
    return this.furnitureRepository.find();
  }

  findOne(id: number) {
    return  this.furnitureRepository.findOneBy({ id });
  }

  update(id: number, updateFurnitureDto: UpdateFurnitureDto) {
    return this.furnitureRepository.update(id, updateFurnitureDto);
  }

  remove(id: number) {
    return this.furnitureRepository.delete(id);
  }
}
