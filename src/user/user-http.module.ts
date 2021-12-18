import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [UserModule],
  providers: [UserService],
})
export class UserHttpModule {}
