import { Transform } from "class-transformer";
import { IsBoolean, IsDateString, IsMongoId, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateAppointmentDto {
 @IsMongoId()
 patientId: Types.ObjectId;

 @IsDateString()
 date: Date;

 @IsBoolean()
 firstAppointment: boolean;

}
