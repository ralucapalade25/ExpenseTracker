import {
    HttpException,
    Injectable,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { Transaction } from '../entities/transactions.entity';
import { Category } from 'src/entities/categories.entity';
import { TransactionDTO } from './transactions.dto';

  @Injectable()
  export class TransactionService {
    constructor(
        @InjectRepository(Transaction)
        private readonly transactionsRepository: Repository<Transaction>,
      ) {}

      async findAll(usrId: number): Promise<TransactionDTO[]> {
   
      return await this.transactionsRepository.createQueryBuilder('ts')
                                              .select(['ts.creation_date as creation_date', 'ts.date as date', 'ts.amount as amount', 'ts.description as description', 'ct.name AS category_name'])  
                                              .leftJoin(Category, 'ct', 'ts.category_id = ct.category_id')
                                              .where('ts.user_id = :usrId', {usrId})
                                              .getRawMany();
      }
  }