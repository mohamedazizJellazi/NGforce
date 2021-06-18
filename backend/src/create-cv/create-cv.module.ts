import { Module } from '@nestjs/common';
import { CreateCvService } from './create-cv.service';
import { CreateCvController } from './create-cv.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {CreateCvSchema}from './create-cv.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'createCv', schema: CreateCvSchema }]),
  ],
  controllers: [CreateCvController],
  providers: [CreateCvService]
})
export class CreateCvModule {}
