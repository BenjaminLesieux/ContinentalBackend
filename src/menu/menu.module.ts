import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { DrinksModule } from '../drinks/drinks.module';

@Module({
  imports: [DrinksModule],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
