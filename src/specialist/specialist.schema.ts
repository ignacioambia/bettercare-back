import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SpecialistDocument = HydratedDocument<Specialist>;


@Schema()
export class Specialist {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  specialty: string;

  @Prop()
  passwordHash: string;
}

export const SpecialistSchema = SchemaFactory.createForClass(Specialist);
