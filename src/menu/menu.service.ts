import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as sharp from 'sharp';
import {
  BASE_DESC_GAP,
  BASE_LEFT_POSITIONING,
  BASE_PRICE_GAP,
  BASE_RIGHT_POSITIONING,
  BASE_TEXT_GAP,
  positionFromDrinkType,
} from './menu.constants';
import { DrinksService } from '../drinks/drinks.service';
import { DrinkType } from '../drinks/drinks.types';

@Injectable()
export class MenuService {
  constructor(private service: DrinksService) {}

  async addTextOnImage() {
    const textArray = await this.generateTextArray();
    try {
      await sharp(path.join(process.cwd(), 'src/exports/contmenu.png'))
        .composite(textArray)
        .toFile(path.join(process.cwd(), 'src/exports/menu.png'));
    } catch (error) {
      console.log(error);
    }
  }

  generateTextBuffer(text: string, fontSize: number, italic: boolean): Buffer {
    const svgImage = italic
      ? `
    <svg width='1500' height='200'>
      <style>
        .title { font-style: italic; font-family: 'ITC Avant Garde Gothic Std', sans-serif; fill: white; font-size: ${fontSize}px; font-weight: bold;}
      </style>
      <text x='0%' y='60%' text-anchor='start' class='title'>${text}</text>
    </svg>
    `
      : `
    <svg width='1600' height='300'>
      <style>
        .title { font-family: 'ITC Avant Garde Gothic Std', sans-serif;  text-align: center; fill: white; font-size: ${fontSize}px; font-weight: bold;}
      </style>
      <text x='0%' y='50%' text-anchor='start' class='title'>${text}</text>
    </svg>
    `;
    return Buffer.from(svgImage);
  }

  downloadMenu() {
    this.addTextOnImage().then();
    return fs.readFileSync(path.join(process.cwd(), 'src/exports/menu.png'));
  }

  async generateTextArray() {
    const types: DrinkType[] = ['beer', 'cocktail', 'wine', 'mocktail'];
    const texts = [];

    for (let i = 0; i < types.length; i++) {
      const drinks = await this.service.findByType(types[i]);
      drinks.forEach((drink, index) => {
        texts.push({
          input: this.generateTextBuffer(drink.name, 160, false),
          top: positionFromDrinkType(types[i]) + index * BASE_TEXT_GAP,
          left: i < 2 ? BASE_LEFT_POSITIONING : BASE_RIGHT_POSITIONING,
        });

        if (drink.description) {
          texts.push({
            input: this.generateTextBuffer(drink.description, 65, true),
            top: positionFromDrinkType(types[i]) + 10 + index * BASE_TEXT_GAP,
            left:
              i < 2
                ? BASE_LEFT_POSITIONING + BASE_DESC_GAP
                : BASE_RIGHT_POSITIONING + BASE_DESC_GAP,
          });
        }

        texts.push({
          input: this.generateTextBuffer(
            drink.price.toString() + '€',
            120,
            false,
          ),
          top: positionFromDrinkType(types[i]) + index * BASE_TEXT_GAP,
          left:
            i < 2
              ? BASE_LEFT_POSITIONING + BASE_PRICE_GAP
              : BASE_RIGHT_POSITIONING + BASE_PRICE_GAP,
        });
      });
    }

    return texts;
  }
}
