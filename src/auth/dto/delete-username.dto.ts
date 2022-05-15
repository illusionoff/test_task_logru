import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserNameDto {
  @ApiProperty({ example: 'Александр', description: 'Ваше имя' })
  @IsString()
  @MinLength(3, { message: 'Имя слишком короткое (минимум 3 символа)' })
  @MaxLength(20, { message: 'Имя слишком длинное (максимум 20 символов)' })
  usernamefind: string;
}
