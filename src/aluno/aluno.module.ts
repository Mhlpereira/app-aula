import { Module } from '@nestjs/common';
import { UsersController } from './aluno.controller';
import { UsersService } from './aluno.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class AlunoModule {}
