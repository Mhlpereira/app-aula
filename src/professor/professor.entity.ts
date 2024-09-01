import { Exclude } from 'class-transformer';
import { Aula } from 'src/aula/aula.entity';
import { Modalidade } from 'src/modalidade/modalidade.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
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

    @Column({ name: 'telefone', nullable: false, unique: true })
    telefone: number;

    @Column({ name: 'endereço' })
    endereço: string;

    @ManyToMany(() => Modalidade, (modalidade) => modalidade.professores)
    @JoinTable()
    modalidades: Modalidade[];

    @OneToMany(() => Aula, (aula) => aula.professor)
    aulas: Promise<Aula[]>;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;
}
