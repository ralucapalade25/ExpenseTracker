import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transactions/transactions.module';
import { User } from './entities/users.entity';
import { Transaction } from './entities/transactions.entity';
import { Category } from './entities/categories.entity';
import { IncomeSource } from './entities/income.sources.entity';
import { UserIncomeSource } from './entities/user.income.sources.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'postgres',
      entities: [User, Transaction, Category, IncomeSource, UserIncomeSource],
      migrations: ['dist/migrations/*.js'],
    }),
    CategoryModule,
    TransactionModule,
    UserModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}

}
