import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
} from 'class-validator';
import { Sex, UserRole } from '../../common/schemas/user.schema';

export class JoinUserRequestDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsString()
  @IsOptional()
  readonly avatar: string;

  @IsEnum(UserRole)
  @IsOptional()
  readonly role: UserRole;

  @IsEnum(Sex)
  @IsOptional()
  readonly sex: Sex;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Max(100)
  readonly age: number;

  @IsString()
  @IsOptional()
  readonly phone: string;
}
