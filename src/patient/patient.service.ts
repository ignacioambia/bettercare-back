import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from './patient.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<Patient>,
  ) {}

  async addPatientToSpecialist(
    createPatientDto: CreatePatientDto,
    specialistId: string | Types.ObjectId,
  ): Promise<Patient> {
    const createdPatient = new this.patientModel({
      ...createPatientDto,
      specialistId: new Types.ObjectId(specialistId),
    });
    return createdPatient.save();
  }

  findAll() {
    return `This action returns all patient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  async remove(id: number) {
    // return `This action removes a #${id} patient`;
    await this.patientModel.deleteMany();
    return 'removed all';
  }
}
