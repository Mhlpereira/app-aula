import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Professor } from './professor.entity';
import { Repository } from 'typeorm';
import { ProfessorDTO } from './dto/professor.dto';

@Injectable()
export class ProfessorService {
    constructor(
        @InjectRepository(Professor)
        private readonly professorRepository: Repository<Professor>,
    ) {}

    async findAllProfessor(): Promise<Professor[]> {
        const professores = await this.professorRepository.find();

        return professores;
    }

    async createProfessor(professorDTO: ProfessorDTO): Promise<ProfessorDTO> {
        try {
            const createdProfessor =
                await this.professorRepository.save(professorDTO);
            return createdProfessor;
        } catch (e) {
            //melhorar o tratamento de erro
            console.error(e);
        }
    }
}
