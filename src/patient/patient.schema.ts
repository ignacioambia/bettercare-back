import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CatDocument = HydratedDocument<Patient>


@Schema()
export class Patient {
  @Prop()
  name: string;


  @Prop()
  birthday: Date

  @Prop()
  email: string
}

export const PatientSchema = SchemaFactory.createForClass(Patient)
