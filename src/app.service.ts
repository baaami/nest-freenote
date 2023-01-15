import { Injectable } from '@nestjs/common';
import { deco } from './lib/deco';

@Injectable()
export class AppService {
  @deco
  getHello(): string {
    return 'Hello World!';
  }
}
