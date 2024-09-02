import { Exclude } from 'class-transformer';
import { Aula } from 'src/aula/aula.entity';
import { Modalidade } from 'src/modalidade/modalidade.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'aluno' })
export class Aluno {
    @PrimaryGeneratedColumn('uuid')
    alunoId: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'email', nullable: false, unique: true })
    email: string;

    @Column({ name: 'CPF', unique: true })
    cpf: string;

    @Column({ name: 'password', nullable: false })
    @Exclude()
    password: string;

    @Column({ name: 'telefone', nullable: false })
    telefone: number;

    @Column({ name: 'endereço' })
    endereço: string;

    @ManyToMany(() => Modalidade, (modalidade) => modalidade.alunos)
    @JoinTable()
    modalidades: Modalidade[];

    @ManyToMany(() => Aula, (aula) => aula.alunos)
    @JoinTable()
    aula: Aula[];
    //ver a possibilidade de colocar o eager component para melhor perfomance

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;

    //add presença
}
