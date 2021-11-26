import { Injectable } from '@nestjs/common';
import { UserService } from './../user/user.service';
import { User } from './../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private useService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<null | Omit<User, 'password'>> {
    const user = await this.useService.findByUsername(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const { password, ...restUser } = user;
    const payload = {
      username: user.username,
      email: user.email,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: restUser,
      expiresIn: jwtConstants.expiresIn,
    };
  }
}