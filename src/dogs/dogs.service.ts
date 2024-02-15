import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dog } from './dog.model';

@Injectable()
export class DogsService {
  constructor(@InjectModel(Dog.name) private dogModel: Model<Dog>) {}

  async findAll(): Promise<Dog[]> {
    return this.dogModel.find().exec();
  }

  async findOne(id: string): Promise<Dog> {
    return this.dogModel.findById(id).exec();
  }

  async create(createDogDto: Dog): Promise<Dog> {
    const createdDog = new this.dogModel(createDogDto);
    return createdDog.save();
  }

  async update(id: string, updateDogDto: Dog): Promise<Dog> {
    return this.dogModel.findByIdAndUpdate(id, updateDogDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.dogModel.deleteOne({ _id: id }).exec();
  }
}