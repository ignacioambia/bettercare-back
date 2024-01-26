import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SpecialistService } from 'src/specialist/specialist.service';
import * as bcrypt from 'bcrypt';
import { LoginFailedException } from 'src/exceptions/login-failed.exception';

@Injectable()
export class AuthService {
  constructor(
    private specialistService: SpecialistService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const specialist = await this.specialistService.getByEmail(email);
    if (!specialist) throw new LoginFailedException();

    const validPassword = await bcrypt.compare(pass, specialist.passwordHash);
    if (!validPassword) {
      throw new LoginFailedException();
    }

    const payload = { sub: specialist._id, name: specialist.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
