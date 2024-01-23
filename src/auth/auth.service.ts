import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SpecialistService } from 'src/specialist/specialist.service';

@Injectable()
export class AuthService {
  constructor(private specialistService: SpecialistService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.specialistService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}
