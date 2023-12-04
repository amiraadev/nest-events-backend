import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EventDto, EventToUpdateDto } from 'src/dtos/event.dto';
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
    const event = await this.repository.findOne({
      where: { id },
      select: ['id', 'name', 'description', 'address', 'when'],
    });
    if (!event) {
      throw new NotFoundException('No event found matching this id.');
    }
    return event;
  }
  @Post()
  async addEvent(@Body() body: EventDto) {
    return await this.repository.save({
      ...body,
    });
  }
  @Put(':id')
  async updateEvent(@Body() body: EventToUpdateDto, @Param('id') id) {
    const event = await this.repository.findOne({
      where: { id },
      select: ['id', 'name', 'description', 'address', 'when'],
    });
    if (!event) {
      throw new NotFoundException('No event found matching this id.');
    }
    return await this.repository.save({
      ...event,
      ...body,
      when: new Date(),
    });
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
