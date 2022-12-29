import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DrinksModule } from './drinks/drinks.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: `${process.env.DATABASE_URL}`,
      }),
    }),
    DrinksModule,
    MenuModule,
  ],
})
export class AppModule {}
