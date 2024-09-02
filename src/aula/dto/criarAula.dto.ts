import { IsNotEmpty, IsString } from 'class-validator';

export class CriarAulaDTO {
    @IsString()
    @IsNotEmpty()
    readonly modalidadeId: string;

    //futuramente colocar horário
}
