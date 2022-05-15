import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EditUserNameDto {
  @ApiProperty({ example: 'Александр', description: 'Ваше имя' })
  @IsString()
  @MinLength(3, { message: 'Имя слишком короткое (минимум 3 символа)' })
  @MaxLength(20, { message: 'Имя слишком длинное (максимум 20 символов)' })
  usernamefind: string;

  @ApiProperty({ example: 'Россия', description: 'Ваша страна' })
  @IsString()
  @MinLength(3, { message: 'Страна меньше 3 символов (минимум 3 символа)' })
  @MaxLength(30, { message: 'Страна больше 30 символов (максимум 30 символов)' })
  editCountry: string;

  @ApiProperty({ example: 'Москва', description: 'Ваш город' })
  @IsString()
  @MinLength(3, { message: 'Город меньше 3 символов (минимум 3 символа)' })
  @MaxLength(30, { message: 'Город больше 30 символов (30 characters max)' })
  editCity: string;
}
