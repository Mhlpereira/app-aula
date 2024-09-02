import { IsNumber, IsString } from 'class-validator';

export class AtualizaAlunoDTO {
    @IsString()
    name?: string;

    @IsNumber()
    telefone?: number;

    @IsString()
    endereco?: string;
}
