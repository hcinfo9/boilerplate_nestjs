import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Length(1, 255)
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  cnpj: string;
}
