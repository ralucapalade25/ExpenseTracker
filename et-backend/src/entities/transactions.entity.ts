import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./users.entity";
import { Category } from "./categories.entity";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    transaction_id: number;

    @Column()
    amount: number;

    @Column()
    date: Date;

    @Column()
    description: string;

    @Column()
    creation_date: Date;

    @Column()
    updated_date: Date;

    @Column( {default: true} )
    active: boolean;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User;

    @ManyToOne(() => Category)
    @JoinColumn({name: 'category_id'})
    category: Category;

}