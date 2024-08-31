import { Module } from '@nestjs/common';
import { AdmController } from './adm.controller';

@Module({
  controllers: [AdmController],
})
export class AdmModule {}
