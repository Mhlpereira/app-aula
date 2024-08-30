import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { ProfessorService } from './professor.service';

@Module({
  providers: [ProfessorService],
  controllers: [ProfessorController]
})
export class ProfessorModule {}
