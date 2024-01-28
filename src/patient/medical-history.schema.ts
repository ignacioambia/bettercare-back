import { HydratedDocument } from 'mongoose';
import { Prop, Schema } from "@nestjs/mongoose";

export type MedicalHistoryDocument = HydratedDocument<MedicalHistory>;

@Schema()
export class MedicalHistory {
 @Prop()
 pathologicalInherited: string[];
}