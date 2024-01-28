import { IsArray, IsOptional, IsString } from "class-validator";

export class MedicalHistoryDto {
  @IsArray()
  @IsOptional()
  @IsString({each: true})
  pathologicalInherited: string[];

}
