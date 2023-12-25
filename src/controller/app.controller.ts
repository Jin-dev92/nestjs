import { Controller, Get } from "@nestjs/common";

import { AppService } from "../service";
import { GetHeathCheckInterface } from "../service/type";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  heathCheck(): GetHeathCheckInterface {
    return this.appService.getHeathCheck();
  }
}
