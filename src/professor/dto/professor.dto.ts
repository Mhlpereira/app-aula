import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { Match } from 'src/validacao/match.decorator';

export class ProfessorDTO {
    readonly id?: string;

    @IsNotEmpty({ message: 'O campo vazio!' })
    readonly name: string;

    @IsEmail(undefined, { message: 'Email inválido!' })
    readonly email: string;

    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/, {
        message:
            'Senha precisa de uma letra minúscula, uma maiúscula, um número  e um caractere especial!',
    })
    @IsNotEmpty({ message: 'O campo vazio!' })
    readonly password: string;

    @Match('password', { message: 'A senha não corresponde!' })
    @IsNotEmpty({ message: 'O campo vazio!' })
    readonly confpassword: string;

    readonly createAt?: string;
    readonly updateAt?: string;
}
