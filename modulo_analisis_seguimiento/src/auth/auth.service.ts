import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService) {}
  /**
   * Generates a JWT token for the user.
   * @param user - The user object containing username and id.
   * @returns An object containing the access token.
   */async validateUser(username: string, pass: string): Promise<any> {
    if (username === 'admin' && pass === 'admin') {
      return { id: 1, username: 'admin' };
    }
  }


  
  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
