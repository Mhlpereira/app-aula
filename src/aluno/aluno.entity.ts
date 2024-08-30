import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: 'aluno'})
export class Aluno{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'email', nullable: false, unique: true})
    email: string;

    @Column({name: 'password', nullable: false})
    password: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at'})
    updateAt: string;
}