import { Type } from "class-transformer";
import { IsNumber, IsOptional, ValidateNested } from "class-validator";

class BloodPressureDto {
 @IsNumber()
 systolic: number;

 @IsNumber()
 diastolic: number;
}

export class VitalSignsDto {
 @IsOptional()
 @ValidateNested()
 @Type(() => BloodPressureDto)
 bloodPressure: BloodPressureDto;

 @IsOptional()
 @IsNumber()
 heartRate: number;

 @IsOptional()
 @IsNumber()
 weight: number;

 @IsOptional()
 @IsNumber()
 height: number;

 @IsOptional()
 @IsNumber()
 bodyTemperature: number;

 @IsOptional()
 @IsNumber()
 bloodOxigen: number;

 @IsOptional()
 @IsNumber()
 glucose: number;
 
 @IsOptional()
 @IsNumber()
 respirationRate: number;
}