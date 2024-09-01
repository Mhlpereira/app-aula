import { Aluno } from 'src/aluno/aluno.entity';
import { Professor } from 'src/professor/professor.entity';
import { Modalidade } from 'src/modalidade/modalidade.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'aula' })
export class Aula {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Modalidade, (modalidade) => modalidade.aulas)
    modalidade: Promise<Modalidade>;

    @ManyToOne(() => Professor, (professor) => professor.aulas)
    professor: Promise<Professor>;

    @ManyToMany(() => Aluno, (alunos) => alunos.aula)
    alunos: Promise<Aluno[]>;

    @Column({ name: 'Confirmada?' })
    confirmada: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
}
