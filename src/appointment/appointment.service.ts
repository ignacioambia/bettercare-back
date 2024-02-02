import { VitalSignsDto } from './dto/vital-signs.dto';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from 'src/patient/patient.schema';
import { Model, Types } from 'mongoose';
import { Appointment } from './appointment.schema';
import { dot } from 'dot-object';
import { PrescriptionDto } from './dto/prescription.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<Patient>,
    @InjectModel(Appointment.name) private appointmentModel: Model<Appointment>
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto) {
    const patient = await this.patientModel.findById(createAppointmentDto.patientId);
    if(!patient){
      throw new BadRequestException('Patient was not found');
    }

    const createdAppointment = new this.appointmentModel(createAppointmentDto);
    return createdAppointment.save();
  }

  async setVitalSigns(vitalSignsDto: VitalSignsDto, appointmentId: Types.ObjectId){
    const updatedAppointment = await this.appointmentModel.findByIdAndUpdate(
      appointmentId,
      {$set: dot({ vitalSigns: vitalSignsDto })},
      { new: true }
    );

    if(!updatedAppointment){
      throw new NotFoundException('Appointment was not found...');
    }

    return updatedAppointment;
  }

  async setDiagnosis(diagnosis: string, appointmentId: Types.ObjectId){
    const updatedAppointment = await this.appointmentModel.findByIdAndUpdate(
      appointmentId,
      {$set: { diagnosis }},
      {new: true}
    );

    if(!updatedAppointment){
      throw new NotFoundException('Appointment was not found...');
    }

    return { message: 'ok'};
  }

  async setPrescription(
    { prescription }: PrescriptionDto,
    appointmentId: Types.ObjectId,
  ) {
    const updatedAppointment = await this.appointmentModel.findByIdAndUpdate(
      appointmentId,
      { $push: { prescription: { $each: prescription } } },
      { new: true },
    );

    if(!updatedAppointment){
      throw new NotFoundException('Appointment was not found...');
    }

    return { message: 'ok' };
  }

  findAll() {
    return `This action returns all appointments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
