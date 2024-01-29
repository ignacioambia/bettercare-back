import { HydratedDocument } from 'mongoose';
import { Prop, Schema } from "@nestjs/mongoose";
import { DrugConsumption } from './dto/drug-consumption.dto';

class PathologicalType {
  diseases: string[];
  allergies: string[];
  surgeries: string[];
}

class NonPathologicalType {
  physicalActivity: string[];
  alcohol: DrugConsumption;
  tobacco: DrugConsumption;
}

export type MedicalHistoryDocument = HydratedDocument<MedicalHistory>;

@Schema()
export class MedicalHistory {
  @Prop()
  pathologicalInherited: string[];

  @Prop({ type: PathologicalType })
  pathological: PathologicalType;

  @Prop({ type: NonPathologicalType })
  nonPathological: NonPathologicalType;
}