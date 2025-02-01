import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Transaction } from 'src/entities/transactions.entity';
import { TransactionController } from 'src/transactions/transactions.controller';
import { TransactionService } from 'src/transactions/transactions.service';


@Module({
    imports: [
      TypeOrmModule.forFeature([Transaction]),
    ],
    controllers: [TransactionController],
    providers: [TransactionService],
  })
  export class TransactionModule {}