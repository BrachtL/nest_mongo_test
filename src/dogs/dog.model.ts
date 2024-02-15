import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Dog extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  birthdate: Date;

  @Prop({ required: true })
  breed: string;
}

export const DogSchema = SchemaFactory.createForClass(Dog);