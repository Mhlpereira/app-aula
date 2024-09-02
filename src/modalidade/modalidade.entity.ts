import { Aluno } from 'src/aluno/aluno.entity';
import { Aula } from 'src/aula/aula.entity';
import { Professor } from 'src/professor/professor.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'modalidade' })
export class Modalidade {
    @PrimaryColumn('uuid')
    modalidadeId: string;

    @Column({ name: 'modalidade', nullable: false })
    modalidade: string;

    @ManyToMany(() => Professor, (professores) => professores.modalidades)
    @JoinTable()
    professores: Professor[];

    @ManyToMany(() => Aluno, (alunos) => alunos.modalidades)
    @JoinTable()
    alunos: Aluno[];

    @OneToMany(() => Aula, (aula) => aula.modalidade)
    aulas: Aula;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;
}
