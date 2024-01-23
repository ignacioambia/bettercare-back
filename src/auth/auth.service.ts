import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SpecialistService } from 'src/specialist/specialist.service';

@Injectable()
export class AuthService {
  constructor(
    private specialistService: SpecialistService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.specialistService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: 'User id' };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
