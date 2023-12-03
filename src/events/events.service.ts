import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  findAll() {
    return { name: 'amira' };
  }
}
