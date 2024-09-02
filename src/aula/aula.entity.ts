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
    aulaId: string;

    @ManyToOne(() => Modalidade, (modalidade) => modalidade.aulas)
    modalidade: Modalidade;

    @ManyToOne(() => Professor, (professor) => professor.aulas)
    professor: Professor;

    @ManyToMany(() => Aluno, (alunos) => alunos.aula)
    alunos?: Aluno[];

    @Column({ name: 'Confirmada?' })
    confirmada: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
}
