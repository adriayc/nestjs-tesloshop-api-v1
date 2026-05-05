import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './entities/user.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    // TypeORM module for product entity
    TypeOrmModule.forFeature([User]),
  ],
  exports: [TypeOrmModule],
})
export class AuthModule {}
