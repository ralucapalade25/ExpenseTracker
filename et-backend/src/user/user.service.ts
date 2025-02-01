import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/users.entity";
import { Repository } from "typeorm";
import { UserDTO } from "./user.model";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}


      async signup(user: UserDTO): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        
        const newUser = new User(user.name, user.email, hash, user.username);
        return this.userRepository.save(newUser);
    }

    async signin(user: UserDTO, jwt: JwtService): Promise<any> {
        const foundUser = await this.userRepository.findOneBy({ email: user.email });
        if (foundUser) {
            const { password } = foundUser;
            if (await bcrypt.compare(user.password, password)) {
                const payload = { email: user.email };
                return {
                    token: jwt.sign(payload),
                };
            }
            throw new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
        }
        throw new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
    }

    async getOne(email): Promise<User> {
        return await this.userRepository.findOneBy({ email: email });
    }
}