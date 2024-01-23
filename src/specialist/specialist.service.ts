import { Injectable } from '@nestjs/common';
import { CreateSpecialistDto } from './dto/create-specialist.dto';
import { UpdateSpecialistDto } from './dto/update-specialist.dto';

export type Patient = any;

@Injectable()
export class SpecialistService {
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
    return 'This action adds a new specialist';
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
