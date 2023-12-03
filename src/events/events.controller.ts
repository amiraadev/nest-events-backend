import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('events')
export class EventsController {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}
  @Get()
  findAll() {
    return this.repository.find();
  }

  @Get(':id')
  async findOneById(@Param('id') id) {
    const event = await this.repository.findOne(id);
    return event;
  }
  @Post()
  addEvent() {
    return {};
  }
  @Put()
  updateEvent() {
    return {};
  }
  @Delete()
  removeEvent() {
    return {};
  }
}
