import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Drink, DrinkSchema } from './entities/Drink';
import { DrinksController } from './controller/drinks.controller';
import { DrinksService } from './service/drinks.service';
import { DrinktypesController } from './controller/drinktypes.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Drink.name, schema: DrinkSchema }]),
  ],
  controllers: [DrinksController, DrinktypesController],
  providers: [DrinksService],
})
export class DrinksModule {}
