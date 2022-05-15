import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
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

  @ApiProperty({ example: 'Россия', description: 'Ваша страна' })
  @IsString()
  @MinLength(3, { message: 'Страна меньше 3 символов (минимум 3 символа)' })
  @MaxLength(30, { message: 'Страна больше 30 символов (максимум 30 символов)' })
  country: string;

  @ApiProperty({ example: 'Москва', description: 'Ваш город' })
  @IsString()
  @MinLength(3, { message: 'Город меньше 3 символов (минимум 3 символа)' })
  @MaxLength(30, { message: 'Город больше 30 символов (максимум 30 символов)' })
  city: string;
}
