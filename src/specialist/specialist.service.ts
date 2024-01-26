import { Injectable } from '@nestjs/common';
import { CreateSpecialistDto } from './dto/create-specialist.dto';
import { UpdateSpecialistDto } from './dto/update-specialist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Specialist } from './specialist.schema';
import { Model } from 'mongoose';

export type Patient = any;

@Injectable()
export class SpecialistService {
  constructor(@InjectModel(Specialist.name) private specialistModel: Model<Specialist>){}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<Patient | undefined> {
    return this.users.find((user) => user.username === username);
  }

  create(createSpecialistDto: CreateSpecialistDto) {
    const createdSpecialist = new this.specialistModel(createSpecialistDto);
    return createdSpecialist.save();
  }

  findAll() {
    return `This action returns all specialist`;
  }

  update(id: number, updateSpecialistDto: UpdateSpecialistDto) {
    return `This action updates a #${id} specialist`;
  }

  remove(id: number) {
    return `This action removes a #${id} specialist`;
  }
}
