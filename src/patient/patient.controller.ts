import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Request } from 'express';
import { MongoIdPipe } from 'src/pipes/mongo-id.pipe';
import { Types } from 'mongoose';
import { MedicalHistoryDto } from './dto/medical-history.dto';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  addPatienToSpecialist(
    @Req() req: Request,
    @Body() createPatientDto: CreatePatientDto,
  ) {
    return this.patientService.addPatientToSpecialist(
      createPatientDto,
      req['user'].sub,
    );
  }

  @Put('medical-history/:patientId')
  addMedicalHistory(
    @Param('patientId', MongoIdPipe) patientId: Types.ObjectId,
    @Body() medicalHistoryDto: MedicalHistoryDto,
  ) {
    return this.patientService.setMedicalHistory(medicalHistoryDto, patientId);
  }

  @Get()
  getSpecialistPatients(@Req() req: Request) {
    return this.patientService.getSpecialistPatients(req['user'].sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(+id);
  }
}
