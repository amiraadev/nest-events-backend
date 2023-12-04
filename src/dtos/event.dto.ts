/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, Length } from 'class-validator';
export class EventDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @Length(5,7)
  description: string;
  address: string;
}
export class EventToUpdateDto {
  @IsString()
  name?: string;
  @Length(5,255)
  description?: string;
  address?: string;
}
