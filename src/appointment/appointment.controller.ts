import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { SetDiagnosisDto, UpdateAppointmentDto } from './dto/update-appointment.dto';
import { VitalSignsDto } from './dto/vital-signs.dto';
import { Types } from 'mongoose';
import { MongoIdPipe } from 'src/pipes/mongo-id.pipe';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Put('vital-signs/:appointmentId')
  setVitalSigns(
    @Param('appointmentId', MongoIdPipe) appointmentId: Types.ObjectId,
    @Body() vitalSignsDto: VitalSignsDto,
  ) {
    return this.appointmentService.setVitalSigns(vitalSignsDto, appointmentId);
  }

  @Put('diagnosis/:appointmentId')
  setDiagnosis(
    @Param('appointmentId', MongoIdPipe) appointmentId: Types.ObjectId,
    @Body() {diagnosis}: SetDiagnosisDto,
  ) {
    return this.appointmentService.setDiagnosis(diagnosis, appointmentId)
  }

  @Get()
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentService.update(+id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(+id);
  }
}
