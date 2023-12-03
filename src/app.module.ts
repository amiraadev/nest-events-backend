import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';
import { EventsModule } from './events/events.module';
import { Event } from './event.entity';

@Module({
  imports: [
    EventsModule,
    TypeOrmModule.forFeature([Event]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: '127.0.0.1',
      username: 'postgres',
      password: 'root',
      database: 'nest-events',
      synchronize: true,
      entities: [Event],
      // entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    EventsModule,
  ],
  controllers: [AppController, EventsController],
  providers: [AppService, EventsService],
})
export class AppModule {}
