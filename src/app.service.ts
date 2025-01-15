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
  getJson2() {
    return {
      name: 'kittasil2',
      lastname: 'silanon2',
      age: 40,
    };
  }  
}
