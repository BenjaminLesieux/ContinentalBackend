import { DrinkType } from '../drinks/drinks.types';

export const BASE_BEER_HEIGHT = 1500;
export const BASE_COCKTAIL_HEIGHT = 2900;
export const BASE_MOCKTAIL_HEIGHT = BASE_COCKTAIL_HEIGHT;
export const BASE_WINE_HEIGHT = BASE_BEER_HEIGHT;
export const BASE_SOFT_HEIGHT = 0;
export const BASE_LEFT_POSITIONING = 850;
export const BASE_RIGHT_POSITIONING = 4000;
export const BASE_TEXT_GAP = 250;
export const BASE_DESC_GAP = 800;
export const BASE_PRICE_GAP = 3 * BASE_DESC_GAP + 400;

export function positionFromDrinkType(type: DrinkType): number {
  switch (type) {
    case 'beer':
      return BASE_BEER_HEIGHT;
    case 'cocktail':
      return BASE_COCKTAIL_HEIGHT;
    case 'mocktail':
      return BASE_MOCKTAIL_HEIGHT;
    case 'soft':
      return BASE_SOFT_HEIGHT;
    case 'wine':
      return BASE_WINE_HEIGHT;
    default:
      return 0;
  }
}
