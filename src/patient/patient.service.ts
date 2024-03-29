// import { MedicalHistory } from './medical-history/medical-history.schema';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from './patient.schema';
import { Model, Types } from 'mongoose';
import { MedicalHistoryDto } from './dto/medical-history.dto';
import * as dot from 'dot-object';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<Patient>,
  ) {}

  async addPatientToSpecialist(
    createPatientDto: CreatePatientDto,
    specialistId: Types.ObjectId,
  ): Promise<Patient> {
    const createdPatient = new this.patientModel({
      ...createPatientDto,
      specialistId,
    });
    return createdPatient.save();
  }

  async setMedicalHistory(
    {
      pathologicalInherited,
      pathological = {},
      nonPathological = {},
    }: MedicalHistoryDto,
    patientId: Types.ObjectId,
  ) {
    const updatedPatient = await this.patientModel.findByIdAndUpdate(
      patientId,
      {
        $push: {
          'medicalHistory.pathologicalInherited': {
            $each: pathologicalInherited || [],
          },
          'medicalHistory.pathological.diseases': {
            $each: pathological.diseases || [],
          },
          'medicalHistory.pathological.allergies': {
            $each: pathological.allergies || [],
          },
          'medicalHistory.pathological.surgeries': {
            $each: pathological.surgeries || [],
          },
          'medicalHistory.nonPathological.physicalActivity': {
            $each: nonPathological.physicalActivity || [],
          },
          'medicalHistory.nonPathological.drugs': {
            $each: nonPathological.drugs || [],
          },
        },
        $set: {
          ...dot.dot({
            medicalHistory: {
              nonPathological: { alcohol: nonPathological.alcohol },
            },
          }),
          ...dot.dot({
            medicalHistory: {
              nonPathological: { tobacco: nonPathological.tobacco },
            },
          }),
        },
      },
      { new: true },
    );

    if (!updatedPatient) throw new NotFoundException('Patient not found');

    return updatedPatient.medicalHistory;
  }

  async getSpecialistPatients(specialistId: Types.ObjectId) {
    return this.patientModel.find({ specialistId });
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
