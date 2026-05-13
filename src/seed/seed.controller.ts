import { Controller, Post } from '@nestjs/common';
import { SeedService } from './seed.service';
// import { Auth } from 'src/auth/decorators';
// import { ValidRoles } from 'src/auth/interfaces';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  // @Auth(ValidRoles.admin)
  executeSeed() {
    return this.seedService.runSeed();
  }
}
