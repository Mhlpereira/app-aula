import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './aluno.entity';
import { Repository } from 'typeorm';
import { AlunoDTO } from './dto/aluno.dto';
import { AtualizaAlunoDTO } from './dto/atualizaAluno.dto';
import { AtualizaPasswordAlunoDTO } from './dto/atulizaPasswordAluno.dto';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
  ) {}

  async findAllAlunos(): Promise<Aluno[]> {
    const alunos = await this.alunoRepository.find();

    return alunos;
  }

  async createAluno(alunoDTO: AlunoDTO): Promise<AlunoDTO> {
    try {
      const createdAluno = await this.alunoRepository.save(alunoDTO);
      return createdAluno;
    } catch (e) {
      //melhorar o tratamento de erro
      console.error(e);
    }
  }

  async updateDadosAluno(
    id: string,
    atualizaAlunoDTO: AtualizaAlunoDTO,
  ): Promise<AtualizaAlunoDTO> {
    try {
      const aluno = await this.alunoRepository.findOneBy({ id });

      if (!aluno) {
        throw new Error('Aluno não encontrado!');
      }

      Object.assign(aluno, atualizaAlunoDTO);

      return this.alunoRepository.save(aluno);
    } catch (e) {
      console.error(e);
    }
  }

  async updatePasswordAluno(
    id: string,
    atualizaAlunoDTO: AtualizaPasswordAlunoDTO,
  ): Promise<AtualizaPasswordAlunoDTO> {
    try {
      const aluno = await this.alunoRepository.findOneBy({ id });

      if (!aluno) {
        throw new Error('Aluno não encontrado!');
      }

      Object.assign(aluno, atualizaAlunoDTO);

      return this.alunoRepository.save(aluno);
    } catch (e) {
      console.error(e);
    }
  }
}
