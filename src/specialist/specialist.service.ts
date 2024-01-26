import { Injectable } from '@nestjs/common';
import { CreateSpecialistDto } from './dto/create-specialist.dto';
import { UpdateSpecialistDto } from './dto/update-specialist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Specialist, SpecialistDocument } from './specialist.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type Patient = any;

@Injectable()
export class SpecialistService {
  constructor(
    @InjectModel(Specialist.name) private specialistModel: Model<Specialist>,
  ) {}

  async getByEmail(email: string): Promise<SpecialistDocument | null> {
    return this.specialistModel.findOne({ email });
  }

  async create(createSpecialistDto: CreateSpecialistDto) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(createSpecialistDto.password, salt);

    const createdSpecialist = new this.specialistModel({
      ...createSpecialistDto,
      passwordHash,
    });
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
