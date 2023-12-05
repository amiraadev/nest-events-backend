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

@Module({
  imports: [
    EventsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([EventEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: '127.0.0.1',
      username: 'postgres',
      password: 'root',
      database: 'nest-events',
      synchronize: true,
      entities: [EventEntity],
      // entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    EventsModule,
  ],
  controllers: [AppController, EventsController],
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
