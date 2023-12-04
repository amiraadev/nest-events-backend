import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from 'src/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
