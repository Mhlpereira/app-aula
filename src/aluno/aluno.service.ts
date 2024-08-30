import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './aluno.entity';
import { Repository } from 'typeorm';
import { AlunoDTO } from './dto/aluno.dto';

@Injectable()
export class AlunoService {
    constructor(
        @InjectRepository(Aluno)
        private readonly alunoRepository: Repository<Aluno>
    ) {}

    async findAllUser(): Promise<Aluno[]>{
        return this.alunoRepository.find();
    }

    async createAluno(alunoDTO: AlunoDTO): Promise<AlunoDTO> {
        try{
            const createAluno
        }
    }
}
