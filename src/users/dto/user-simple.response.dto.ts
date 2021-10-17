import { User } from '../../common/schemas/user.schema';
import { PickType } from '@nestjs/swagger';

export class UserSimpleResponseDto extends PickType(User, [
  'username',
  'email',
  'description',
  'avatar',
  'phone',
  'sex',
] as const) {}
