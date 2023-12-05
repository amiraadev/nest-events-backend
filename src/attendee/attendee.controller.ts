import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttendeeEntity } from 'src/attendee.entity';
import { AttendeeDto } from 'src/dtos/attendee.dto';
import { Repository } from 'typeorm';

@Controller('attendee')
export class AttendeeController {
  constructor(
    @InjectRepository(AttendeeEntity)
    private readonly repository: Repository<AttendeeEntity>,
  ) {}
  @Get()
  async getAllAttendees() {
    return await this.repository.find();
  }
  @Post()
  async addAttendee(@Body() body: AttendeeDto) {
    return await this.repository.save({
      ...body,
    });
  }
}
