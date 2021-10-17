import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../common/schemas/user.schema';
import { UsersController } from './users.controller';
import {
  UserSkill,
  UserSkillSchema,
} from '../common/schemas/user-skill.schema';
import {
  UserExperience,
  UserExperienceSchema,
} from '../common/schemas/user-experience.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: UserSkill.name, schema: UserSkillSchema },
      { name: UserExperience.name, schema: UserExperienceSchema },
    ]),
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
