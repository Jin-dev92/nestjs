import { Injectable } from "@nestjs/common";
import * as process from "process";

import { GetHeathCheckInterface, NodeServerEnvironmentEnum } from "./type";

@Injectable()
export class AppService {
  getHeathCheck(): GetHeathCheckInterface {
    return {
      timezone: new Date(),
      server: process.env.NODE_ENV ?? NodeServerEnvironmentEnum.LOCAL,
    };
  }
}
