import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SpecialistModule } from './specialist/specialist.module';
import 'dotenv/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGO_DB_CONNECTION
    ),
    PatientModule,
    AuthModule,
    SpecialistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
