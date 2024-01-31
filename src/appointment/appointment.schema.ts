import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

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
 vitalSigns: string;

 @Prop()
 diagnois: string

 prescription: Object
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
