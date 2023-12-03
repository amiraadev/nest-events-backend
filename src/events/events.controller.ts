import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EventDto } from 'src/dtos/event.dto';

@Controller('events')
export class EventsController {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}
  @Get()
  async findAll() {
    return await this.repository.find();
  }

  @Get(':id')
  async findOneById(@Param('id') id) {
    const event = await this.repository.findOne(id);
    return event;
  }
  @Post()
  async addEvent(@Body body: EventDto) {
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
