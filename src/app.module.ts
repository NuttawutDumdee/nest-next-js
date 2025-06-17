import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Furniture } from './furniture/entities/furniture.entity';
import { FurnitureModule } from './furniture/furniture.module';

@Module({
  imports: [
    FurnitureModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      entities: [Furniture],
      synchronize: true,
    }),
  ],
})
export class AppModule {}