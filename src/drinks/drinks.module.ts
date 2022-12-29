import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Drink, DrinkSchema } from './entities/Drink';
import { DrinksController } from './drinks.controller';
import { DrinksService } from './drinks.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Drink.name, schema: DrinkSchema }]),
  ],
  controllers: [DrinksController],
  providers: [DrinksService],
  exports: [DrinksService],
})
export class DrinksModule {}
