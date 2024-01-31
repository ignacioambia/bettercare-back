import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DrugConsumption } from './drug-consumption.dto';

class PathologicalDto {
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  diseases?: string[];

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  allergies?: string[];

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  surgeries?: string[];
}

class NonPathologicalDto {
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  physicalActivity?: string[];

  @ValidateNested()
  @Type(() => DrugConsumption)
  alcohol?: DrugConsumption;

  @ValidateNested()
  @Type(() => DrugConsumption)
  tobacco?: DrugConsumption;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => DrugConsumption)
  drugs?: DrugConsumption[];
}

export class MedicalHistoryDto {
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  pathologicalInherited: string[];

  @ValidateNested()
  @Type(() => PathologicalDto)
  pathological: PathologicalDto;

  @ValidateNested()
  @Type(() => NonPathologicalDto)
  nonPathological: NonPathologicalDto;
}
