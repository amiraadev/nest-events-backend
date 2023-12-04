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
import { EventEntity } from 'src/event.entity';

@Controller('events')
export class EventsController {
  constructor(
    @InjectRepository(EventEntity)
    private readonly repository: Repository<EventEntity>,
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
  async addEvent(@Body() body: EventDto) {
    return await this.repository.save({
      ...body,
    });
  }
  @Put()
  updateEvent() {
    return {};
  }
  @Delete()
  removeEvent() {
    return {};
  }

  @Get('/practice')
  async find(@Param('id') id) {
    const event = await this.repository.findOne(id);
    return event;
  }
}
