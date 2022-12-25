import { Controller, Get } from '@nestjs/common';
import { DrinksService } from '../service/drinks.service';

@Controller('drinktype')
export class DrinktypesController {
  constructor(private service: DrinksService) {}

  @Get('beers')
  getBeers() {
    return this.service.findByType('beer');
  }

  @Get('cocktails')
  getCocktails() {
    return this.service.findByType('cocktail');
  }

  @Get('mocktails')
  getMocktails() {
    return this.service.findByType('mocktail');
  }

  @Get('softs')
  getSofts() {
    return this.service.findByType('soft');
  }
}
