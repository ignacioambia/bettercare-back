import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { VitalSignsDto } from "./dto/vital-signs.dto";
import { PrescriptionDto } from "./dto/prescription.dto";

export type AppointmentDocument = HydratedDocument<Appointment>;

@Schema()
export class Appointment {
 @Prop({ type: Types.ObjectId, ref: 'patients'})
 patientId: Types.ObjectId;

 @Prop()
 date: Date;

 @Prop()
 firstAppointment: boolean;

 @Prop()
 reason: string;

 @Prop()
 condition: string;
 
 @Prop()
 vitalSigns: VitalSignsDto;

 @Prop()
 diagnosis: string

 @Prop()
 prescription: PrescriptionDto
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
