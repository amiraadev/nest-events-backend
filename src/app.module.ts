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
      port: Number(process.env.DB_PORT),
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
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
