/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AttendeeEntity } from 'src/attendee.entity';
import { EventEntity } from 'src/event.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    entities: [EventEntity,AttendeeEntity],
    // entities: ['dist/**/*.entity{.ts,.js}'],
  }),
);
