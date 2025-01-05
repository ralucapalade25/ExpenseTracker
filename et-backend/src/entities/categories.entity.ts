import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Transaction } from "./transactions.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    name: string;

    @Column()
    creation_date: Date;

    @Column()
    updated_date: Date;

    @Column({ nullable: true })
    image_path: string;

    @Column( {default: true} )
    active: boolean;

    @OneToMany(type => Transaction, transaction => transaction.category)
    transactions: Transaction[];  
}