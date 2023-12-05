import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';
import { EventsModule } from './events/events.module';
import { EventEntity } from './event.entity';
import { AppArabService } from './appArab.service';
import { dummyFactoryClass } from './app.dummy';
import { ConfigModule } from '@nestjs/config';
import ormConfig from './config/orm.config';
import { AttendeeEntity } from './attendee.entity';
import { AttendeeController } from './attendee/attendee.controller';

@Module({
  imports: [
    EventsModule,
    AttendeeEntity,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
      expandVariables: true,
    }),
    TypeOrmModule.forFeature([EventEntity]),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig,
    }),
    EventsModule,
  ],
  controllers: [AppController, EventsController, AttendeeController],
  // providers: [AppService, EventsService],
  providers: [
    EventsService,
    {
      provide: AppService,
      useClass: AppArabService,
    },
    {
      provide: 'APP_NAME',
      useValue: 'test another custom provider',
    },
    {
      provide: 'FACTORY_DUMMY_CLASS',
      inject: [dummyFactoryClass],
      useFactory: (app) => `${app.dummy()}`,
    },
    dummyFactoryClass,
  ],
})
export class AppModule {}
