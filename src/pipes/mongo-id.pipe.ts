import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class MongoIdPipe implements PipeTransform<string, Types.ObjectId> {
  transform(id: string) {
    if (Types.ObjectId.isValid(id)) return new Types.ObjectId(id);
    throw new BadRequestException(`"${id}" is not a valid id`);
  }
}
