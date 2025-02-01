import { Controller, Get, Param, Req } from '@nestjs/common';
import { TransactionService } from './transactions.service';

import { UserRequest } from 'src/user/user.interface';
import { TransactionDTO } from './transactions.dto';

@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly transactionsService: TransactionService,
  ) {}
  @Get()
  async getTransactions(@Req() request: UserRequest): Promise<TransactionDTO[]> {
    return await this.transactionsService.findAll(request.user.user_id);
  }
}