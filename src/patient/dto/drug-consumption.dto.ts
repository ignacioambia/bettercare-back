import { IsOptional, IsString } from 'class-validator';

export class DrugConsumption {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  dose: string;

  @IsString()
  @IsOptional()
  consumptionFrequency: string;

  @IsString()
  @IsOptional()
  timeConsumed: string;

  @IsString()
  @IsOptional()
  suspended: string;
}
