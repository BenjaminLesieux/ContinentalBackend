import { Injectable } from '@nestjs/common';
import { DrinkDocument, Drink } from './entities/Drink';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DrinksDto } from './dto/DrinksDto';
import { DrinkType } from './drinks.types';

@Injectable()
export class DrinksService {
  constructor(
    @InjectModel(Drink.name) private drinkModel: Model<DrinkDocument>,
  ) {}

  getDrinks(): Promise<Drink[]> {
    return this.drinkModel.find().exec();
  }

  getDrink(id: Types.ObjectId): Promise<Drink> {
    return this.drinkModel.findById(id).exec();
  }

  updateDrink(id: Types.ObjectId, data: Partial<Drink>) {
    return this.drinkModel.updateOne({ _id: id }, data).exec();
  }

  createDrink(drink: DrinksDto): Promise<Drink> {
    const drinkEntity = new this.drinkModel(drink);
    return drinkEntity.save();
  }

  deleteDrink(id: Types.ObjectId) {
    return this.drinkModel.deleteOne({ _id: id }).exec();
  }

  findByType(type: DrinkType): Promise<Drink[]> {
    return this.drinkModel.find({ type: type }).exec();
  }
}
