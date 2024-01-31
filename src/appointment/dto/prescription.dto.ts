import { IsString } from "class-validator";

export class PrescriptionDto {
 @IsString()
 medicineName: string;

 @IsString()
 usageDescription: string;
}