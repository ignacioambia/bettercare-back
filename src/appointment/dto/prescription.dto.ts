import { Type } from "class-transformer";
import { IsArray, IsString, ValidateNested } from "class-validator";

export class PrescriptionElementDto {
 @IsString()
 medicineName: string;

 @IsString()
 usageDescription: string;
}

export class PrescriptionDto {
 @IsArray()
 @ValidateNested({ each: true })
 @Type(() => PrescriptionElementDto)
 prescription: PrescriptionElementDto[]
}