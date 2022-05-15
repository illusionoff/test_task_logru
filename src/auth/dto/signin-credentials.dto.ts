import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SigninCredentialDto {
  @ApiProperty({ example: 'Александр', description: 'Ваше имя' })
  @IsString()
  @MinLength(3, { message: 'Имя слишком короткое (минимум 3 символа)' })
  @MaxLength(20, { message: 'Имя слишком длинное (максимум 20 символов)' })
  username: string;

  @ApiProperty({ example: '12345678', description: 'Ваш пароль' })
  @IsString()
  @MinLength(8, { message: 'Пароль слишком короткий (минимум 8 символа)' })
  @MaxLength(20, { message: 'Пароль слишком длинный (максимум 30 символов)' })
  password: string;
}
