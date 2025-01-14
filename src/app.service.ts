/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS!!!';
  }

  getName(): string {
    return 'Kittasil Silanon';
  }

  getJson() {
    return {
      name: 'kittasil',
      lastname: 'silanon',
      age: 39,
    };
  }
}
