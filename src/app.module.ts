import { Module } from '@nestjs/common';
import { DrinksController } from './drinks/controller/drinks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DrinksModule } from './drinks/drinks.module';
import { DrinksService } from './drinks/service/drinks.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: 'mongodb+srv://stephen_ch:zYXzyn2skj1Q9IQ0@cluster0.wyp1l.mongodb.net/continental',
      }),
    }),
    DrinksModule,
  ],
})
export class AppModule {}
