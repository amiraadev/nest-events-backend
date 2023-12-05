/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppArabService {
  getHello(): string {
    return 'مرحبا بك';
  }
}
