import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Specialist {
 @Prop()
 name: string;

 @Prop()
 email: string

 @Prop()
 specialty: string
}

export const SpecialistSchema = SchemaFactory.createForClass(Specialist)