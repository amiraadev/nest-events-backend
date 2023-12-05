/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class dummyFactoryClass {
  public dummy(): string {
    return 'this is a dummy message for you ';
  }
}
