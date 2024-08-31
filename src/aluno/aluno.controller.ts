import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { Response } from 'express';
import { AlunoDTO } from './dto/aluno.dto';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoServices: AlunoService) {}

  @Get()
  async findAllAlunos(@Res() response: Response) {
    const alunos = await this.alunoServices.findAllAlunos();
    return response.status(200).json(alunos);
  }

  @Post()
  async createAluno(@Res() response: Response, @Body() alunoDTO: AlunoDTO) {
    const createdAluno = await this.alunoServices.createAluno(alunoDTO);

    return response.status(201).json(createdAluno);
  }
}
