import { DrinkType } from '../drinks.types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DrinksDto {
  @ApiProperty({
    description: 'The name of the drink',
  })
  private name: string;

  @ApiProperty({
    description: 'The price of the drink in euros',
  })
  private price: number;

  @ApiPropertyOptional({
    description:
      'The description of the drink. ' +
      'Often used to describe the ingredients ' +
      'if the drink is not wine, beer or soft',
  })
  private description: string;

  @ApiProperty({
    description:
      'The type of the drink. Can be either a beer, wine, cocktail, mocktail, or a soft',
  })
  private type: DrinkType;
}
