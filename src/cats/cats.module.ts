import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './models/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatsModule {}
