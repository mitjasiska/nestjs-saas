import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ username, password }: AuthPayloadDto) {
    const user = await this.userService.findOneByUsername(username);
    if (user && user.password === password) {
      return this.jwtService.sign({
        id: user.id,
        username: user.username,
      });
    }

    return null;
  }
}
