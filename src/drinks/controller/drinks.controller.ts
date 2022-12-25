import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DrinksDto } from '../dto/DrinksDto';
import { Drink } from '../entities/Drink';
import { DrinksService } from '../service/drinks.service';
import { Types } from 'mongoose';

@Controller('drinks')
export class DrinksController {
  constructor(private service: DrinksService) {}

  @Post()
  createDrink(@Body() drink: DrinksDto): Promise<Drink> {
    return this.service.createDrink(drink);
  }

  @Delete()
  deleteDrink(@Body() id: Types.ObjectId) {
    return this.service.deleteDrink(id);
  }

  @Get()
  getDrinks(): Promise<Drink[]> {
    return this.service.getDrinks();
  }

  @Get(':id')
  getDrink(@Param('id') id: Types.ObjectId): Promise<Drink> {
    return this.service.getDrink(id);
  }

  @Patch(':id')
  updateDrink(
    @Param('id') id: Types.ObjectId,
    @Body() data: Partial<DrinksDto>,
  ) {
    return this.service.updateDrink(id, data);
  }
}
