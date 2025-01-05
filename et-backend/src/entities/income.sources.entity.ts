import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { UserIncomeSource } from "./user.income.sources.entity";

@Entity()
export class IncomeSource {
    @PrimaryGeneratedColumn()
    income_id: number;

    @Column()
    name: string;

    @Column()
    creation_date: Date;

    @Column()
    updated_date: Date;

    @Column( {default: true} )
    active: boolean;

    @OneToMany(type => UserIncomeSource, id => id.income)
    sources: UserIncomeSource[];  
}



