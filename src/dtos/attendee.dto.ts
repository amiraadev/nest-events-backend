/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsPositive,
  IsDate,
} from 'class-validator';
export class AttendeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  // @IsDate()
  // when: Date;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsPositive()
  @IsNumber()
  event_id: number;
}
