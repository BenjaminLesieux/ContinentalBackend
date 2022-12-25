import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DrinkType } from '../drinks.types';

export type DrinkDocument = HydratedDocument<Drink>;

@Schema()
export class Drink {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  description: string;

  @Prop({ type: String, required: true })
  type: DrinkType;
}

export const DrinkSchema = SchemaFactory.createForClass(Drink);
