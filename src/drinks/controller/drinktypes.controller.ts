import { Controller, Get, Param } from '@nestjs/common';
import { DrinksService } from '../service/drinks.service';
import { DrinkType } from '../drinks.types';
import { Drink } from '../entities/Drink';

@Controller('drinktype')
export class DrinktypesController {
  constructor(private service: DrinksService) {}

  @Get(':type')
  findByType(@Param('type') type: DrinkType): Promise<Drink[]> {
    return this.service.findByType(type);
  }
}
