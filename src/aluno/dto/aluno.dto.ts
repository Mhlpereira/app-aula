import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { IsCPF } from 'class-validator-cpf';
import { Match } from 'src/validacao/match.decorator';

export class AlunoDTO {
  readonly id?: string;

  @IsNotEmpty({ message: 'O campo vazio!' })
  readonly name: string;

  @IsEmail(undefined, { message: 'Email inválido!' })
  readonly email: string;

  @IsCPF({ message: 'CPF inválido!' })
  cpf: string;

  @IsNotEmpty({ message: 'O está campo vazio!' })
  @Type(() => Date)
  @IsDate({ message: 'O formato da data está inválido, esperado DD/MM/YYYY' })
  nascimento: Date;

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
