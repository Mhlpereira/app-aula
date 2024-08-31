import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorDTO } from './dto/professor.dto';
import { Response } from 'express';

@Controller('professor')
export class ProfessorController {
    constructor(private readonly professorServices: ProfessorService) {}

    @Get()
    async findAllProfessor(@Res() response: Response) {
        const alunos = await this.professorServices.findAllProfessor();
        return response.status(200).json(alunos);
    }

    @Post()
    async createAluno(
        @Res() response: Response,
        @Body() professorDTO: ProfessorDTO,
    ) {
        const createdProfessor =
            await this.professorServices.createProfessor(professorDTO);

        return response.status(201).json(createdProfessor);
    }
}
