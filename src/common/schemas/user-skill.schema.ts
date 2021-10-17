import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export enum UserSkillType {
  SERVER = 'SERVER',
  FRONT = 'FRONT',
  DEVOPS = 'DEVOPS',
  ETC = 'ETC',
}

@Schema({
  timestamps: true,
})
export class UserSkill {
  _id: mongoose.Types.ObjectId;

  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  user: mongoose.Types.ObjectId;

  @Prop({
    enum: [
      UserSkillType.SERVER,
      UserSkillType.FRONT,
      UserSkillType.DEVOPS,
      UserSkillType.ETC,
    ],
    required: true,
  })
  type: UserSkillType;
}

export type UserSkillDocument = UserSkill & Document;

export const UserSkillSchema = SchemaFactory.createForClass(UserSkill);
