import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { DrinksDto } from '../dto/DrinksDto';
import { Drink } from '../entities/Drink';
import { DrinksService } from '../service/drinks.service';
import { Types } from 'mongoose';
import { DrinkType } from '../drinks.types';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('drinks')
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
  @ApiQuery({
    name: 'type',
    required: false,
  })
  getDrinks(@Query('type') type?: DrinkType): Promise<Drink[]> {
    if (type) return this.service.findByType(type);
    return this.service.getDrinks();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: String,
  })
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
