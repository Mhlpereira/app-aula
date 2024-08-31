import { Exclude } from 'class-transformer';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'professor' })
export class Professor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'email', nullable: false, unique: true })
    email: string;

    @Column({ name: 'password', nullable: false })
    @Exclude()
    password: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;
}
