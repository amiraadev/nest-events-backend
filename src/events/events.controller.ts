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
import { Like, MoreThan, Repository } from 'typeorm';
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
  @Get('practice/test')
  async find() {
    const event = await this.repository.find({
      select: ['id', 'name', 'description', 'address', 'when'],
      where: [
        { id: MoreThan(1) },
        { name: Like('%nira%') },
        { when: MoreThan(new Date('2021-02-12T13:00:00')) },
      ],
      take: 2,
      order: {
        id: 'DESC',
      },
    });
    return event;
  }

  @Post()
  async addEvent(@Body() { name, description, address }: EventDto) {
    return { name, description, address };
    // return await this.repository.save({
    //   ...{
    //     name,
    //     description,
    //     address,
    //   },
    // });
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
  @Delete(':id')
  async removeEvent(@Param('id') id) {
    const event = await this.repository.findOne({
      where: { id },
      select: ['id', 'name', 'description', 'address', 'when'],
    });
    if (!event) {
      throw new NotFoundException('No event found matching this id.');
    }
    const deletedEvent = await this.repository.delete(id);

    return {
      message: 'Event deleted successfully',
      deletedEvent,
    };
  }
}
