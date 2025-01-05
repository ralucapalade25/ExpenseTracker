import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Transaction } from "./transactions.entity";
import { UserIncomeSource } from "./user.income.sources.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    monthly_budget: number;

    @Column()
    creation_date: Date;

    @Column()
    updated_date: Date;

    @Column( {default: true} )
    active: boolean;

    @OneToMany(type => Transaction, transaction => transaction.user)
    transactions: Transaction[];    

    @OneToMany(type => UserIncomeSource, source => source.user)
    sources: UserIncomeSource[];    
}