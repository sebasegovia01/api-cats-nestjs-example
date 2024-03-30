import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop()
  color: string;

  @Prop({ type: Object })
  owner: {
    name: string;
    contact: string;
  };

  @Prop()
  vaccinated: boolean;

  @Prop({ type: [{ date: String, vaccine: String }] })
  medical_records: { date: string; vaccine: string }[];

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

// para que añada timestamp y tambien para remover version key
export const CatSchema = SchemaFactory.createForClass(Cat)
  .set('timestamps', true)
  .set('versionKey', false);
