import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bye') // <-- the route should be 'bye' instead of '/bye'
  getBye(): string { // <-- added the return type for clarity
    return 'Bye!';
  }
}
