import { Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttendeeEntity } from 'src/attendee.entity';
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
  async addAttendee() {
    return await this.repository.find();
  }
}
