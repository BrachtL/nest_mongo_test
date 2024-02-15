import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './dog.model';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Dog> {
    return this.dogsService.findOne(id);
  }

  @Post()
  async create(@Body() createDogDto: Dog): Promise<Dog> {
    return this.dogsService.create(createDogDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDogDto: Dog): Promise<Dog> {
    return this.dogsService.update(id, updateDogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.dogsService.remove(id);
  }
}