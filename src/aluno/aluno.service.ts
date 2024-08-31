import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './aluno.entity';
import { Repository } from 'typeorm';
import { AlunoDTO } from './dto/aluno.dto';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
  ) {}

  async findAllUser(): Promise<Aluno[]> {
    const alunos = await this.alunoRepository.find();

    return alunos;
  }

  async createAluno(alunoDTO: AlunoDTO): Promise<AlunoDTO> {
    try {
      const createdAluno = await this.alunoRepository.save(alunoDTO);
      return createdAluno;
    } catch (e) {
      console.error(e);
    }
  }
}
