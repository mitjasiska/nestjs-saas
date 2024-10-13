import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ usernameOrEmail, password }: AuthPayloadDto) {
    const user =
      await this.userService.findOneByUsernameOrEmail(usernameOrEmail);
    if (user && bcrypt.compareSync(password, user.password)) {
      return this.jwtService.sign({
        id: user.id,
        username: user.username,
      });
    }

    return null;
  }
}
