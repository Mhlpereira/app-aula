import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professor } from './professor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Professor])],
    providers: [ProfessorService],
    controllers: [ProfessorController],
})
export class ProfessorModule {}
