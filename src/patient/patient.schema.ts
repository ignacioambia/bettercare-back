import { MedicalHistory } from './medical-history.schema';
import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PatientDocument = HydratedDocument<Patient>;

@Schema()
export class Patient {
  @Prop({ type: Types.ObjectId, ref: 'specialists', required: true })
  specialistId: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  mothersLastName: string;

  @Prop()
  gender: string;

  @Prop()
  address: string;

  @Prop()
  birthday: Date;

  @Prop()
  email: string;

  @Prop()
  medicalHistory: MedicalHistory;

}

export const PatientSchema = SchemaFactory.createForClass(Patient);
