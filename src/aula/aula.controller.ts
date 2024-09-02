import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AulaService } from './aula.service';
import { CriarAulaDTO } from './dto/criarAula.dto';

@Controller('aula')
export class AulaController {
  constructor(private readonly aulaService: AulaService) {}

  // listar aulas geral, por modalidade, por professor, por aluno.

  @Post('criar/:professorId')
  async createAula(@Param('ProfessorId') professorId: string,
@Body() criarAulaDTO: CriarAulaDTO ) {}

 return await this.aulaService.createAula(professorId, criarAulaDTO)
}
