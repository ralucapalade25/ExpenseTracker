import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
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

    @Column({ nullable: true })
    monthly_budget: number;

    @CreateDateColumn()
    creation_date: Date;

    @UpdateDateColumn()
    updated_date: Date;

    @Column( {default: true} )
    active: boolean;

    @OneToMany(type => Transaction, transaction => transaction.user)
    transactions: Transaction[];    

    @OneToMany(type => UserIncomeSource, source => source.user)
    sources: UserIncomeSource[];    

    constructor(
        name: string,
        email: string,
        password: string,
        username: string
      ) {
        if (name && email && password && username) {
          this.name = name;
          this.email = email;
          this.password = password;
          this.username = username;
        }
    }

}