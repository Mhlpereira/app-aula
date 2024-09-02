import { Injectable } from '@nestjs/common';
import { Aluno } from 'src/aluno/aluno.entity';
import { Modalidade } from 'src/modalidade/modalidade.entity';
import { Professor } from 'src/professor/professor.entity';
import { Repository } from 'typeorm';
import { Aula } from './aula.entity';

@Injectable()
export class AulaService {
    constructor(
    @InjectRepository(Aluno)
    private alunoRepository: Repository<Aluno>,
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>,
    @InjectRepository(Modalidade)
    private modalidadeRepository: Repository<Modalidade>,
    @InjectRepository(Aula)
    private aulaRepository: Repository<Aula>,
    );

    async createAula(professorID: number,criarAulaDTO: CriarAulaDTO): Promise<Aula> {
        const professor = await this.professorRepository.
    }

}
