import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Category } from 'src/entities/categories.entity';
import { CategoryController } from 'src/category/category.controller';
import { CategoryService } from 'src/category/category.service';


@Module({
    imports: [
      TypeOrmModule.forFeature([Category]),
    ],
    controllers: [CategoryController],
    providers: [CategoryService],
  })
  export class CategoryModule {}