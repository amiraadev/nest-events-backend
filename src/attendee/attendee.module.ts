import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendeeController } from './attendee.controller';
import { AttendeeEntity } from 'src/attendee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AttendeeEntity])],
  controllers: [AttendeeController],
  providers: [],
})
export class AttendeeModule {}
