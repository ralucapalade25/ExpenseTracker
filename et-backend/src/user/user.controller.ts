import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UserDTO } from './user.model';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,
        private jwtService: JwtService
    ) {
    }
    @Post('/signup')
    async Signup(@Res() response, @Body() user: UserDTO) {
        const newUSer = await this.userService.signup(user);
        return response.status(HttpStatus.CREATED).json({
            newUSer
        })
    }
    @Post('/signin')
    async SignIn(@Res() response, @Body() user: UserDTO) {
        const token = await this.userService.signin(user, this.jwtService);
        return response.status(HttpStatus.OK).json(token)
    }

}