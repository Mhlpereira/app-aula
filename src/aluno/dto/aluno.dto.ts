import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class AlunoDTO {
  readonly id?: string;

  @IsNotEmpty({ message: 'O campo vazio!' })
  readonly name: string;

  @IsEmail(undefined, { message: 'Email inválido!' }) //add validador de que é único tb
  @readonly
  email: string;

  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres!' })
  readonly password: string;

  // add segundo password

  readonly createAt?: string;
  readonly updateAt?: string;
}
