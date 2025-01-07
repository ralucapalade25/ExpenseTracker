import { User } from "src/entities/users.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { secret } from "src/constants";
import { JwtModule } from "@nestjs/jwt";
import { isAuthenticated } from "./user.request";

@Module({
    imports: [
      TypeOrmModule.forFeature([User]),
      JwtModule.register({
        secret,
        signOptions: { expiresIn: '2h' },
      }),
    ],
    controllers: [UserController],
    providers: [UserService],
  })
  export class UserModule {
    
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(isAuthenticated)
        .exclude(
          { path: 'user/signin', method: RequestMethod.POST },
          { path: 'user/signup', method: RequestMethod.POST },
        ).forRoutes('*');
  }
  }