import { User } from '../../common/schemas/user.schema';
import { OmitType } from '@nestjs/swagger';

export class UserResponseDto extends OmitType(User, ['password'] as const) {}
