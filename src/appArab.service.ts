/* eslint-disable prettier/prettier */
import { Inject,Injectable } from '@nestjs/common';

@Injectable()
export class AppArabService {
    constructor(
        @Inject('APP_NAME')
        private readonly name: string,
        @Inject('FACTORY_DUMMY_CLASS')
        private readonly message: string
    ){}
    getHello(): string {
    return `مرحبا بك we are trying to ${this.name} and we have ${this.message}`;
  }
}
