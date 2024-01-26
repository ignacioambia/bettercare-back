import {
  IsEmail,
  IsOptional,
  IsDateString,
  IsString,
  IsIn,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  mothersLastName: string;

  @IsIn(['male', 'female'], {
    message: 'Gender must be either "male" or "female" ',
  })
  gender: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsOptional()
  @IsDateString()
  birthday: Date;

  @IsEmail()
  @IsOptional()
  email: string;
}
