import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./users.entity";
import { IncomeSource } from "./income.sources.entity";

@Entity()
export class UserIncomeSource {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    creation_date: Date;

    @Column()
    updated_date: Date;

    @Column( {default: true} )
    active: boolean;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User;  

    @ManyToOne(() => IncomeSource)
    @JoinColumn({name: 'income_id'})
    income: IncomeSource;  
}