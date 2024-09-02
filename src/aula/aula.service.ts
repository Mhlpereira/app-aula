import { Injectable, NotFoundException } from '@nestjs/common';
import { Aluno } from 'src/aluno/aluno.entity';
import { Modalidade } from 'src/modalidade/modalidade.entity';
import { Professor } from 'src/professor/professor.entity';
import { Repository } from 'typeorm';
import { Aula } from './aula.entity';
import { CriarAulaDTO } from './dto/criarAula.dto';
import { ConfirmaParticipacaoDTO } from './dto/confirmaParticipacao.dto';

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

    async createAula(professorId: string, modalidadeId: string, criarAulaDTO: CriarAulaDTO): Promise<Aula> {
        const professor = await this.professorRepository.findOne({
            where:{professorId},
            relations: ['modalidade']
        });

        if(!professor){
            throw new Error('Professor encontrado!');
        }

        const modalidade = await this.modalidadeRepository.findOne({
            where: {modalidadeId }
        });
        

        const novaAula = this.aulaRepository.create({
            professor: professor,
            modalidade: modalidade,
            alunos: [],
            confirmada: false,
        });

    professor.aulas.push(novaAula);

       await this.aulaRepository.save(novaAula);
       await this.professorRepository.save(professor);

       return novaAula;
    }

    async confirmaAula(alunoId: string, aulaId: string, confirmaParticipacaoDTO: ConfirmaParticipacaoDTO){
        const aluno = await this.alunoRepository.findOne(
            {
                where: {alunoId}
            }
        );

        const aula = await this.aulaRepository.findOne({
            where: {aulaId}
        });

        if(!aluno){
            throw new NotFoundException('Aluno(a) não encontrado(a)!')
        }

        if(!aula){
            throw new NotFoundException('Aula não encontrada!')
        }

        if(!aula.confirmada){
            aula.confirmada = true;
        }

        aula.alunos.push(aluno);
        aluno.aula.push(aula);

        await this.alunoRepository.save(aula);
    }
    
}
