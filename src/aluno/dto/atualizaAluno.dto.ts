import { IsString, Matches } from 'class-validator';
import { Match } from 'src/validacao/match.decorator';

export class AtualizaAlunoDTO {
    @IsString()
    name?: string;

    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/, {
        message:
            'Senha precisa de uma letra minúscula, uma maiúscula, um número  e um caractere especial!',
    })
    password?: string;

    @Match('password', { message: 'A senha não corresponde!' })
    confpassword?: string;
}
