import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class UserExperience {
  _id: mongoose.Types.ObjectId;

  @Prop({
    type: String,
    min: 2,
    max: 255,
    required: true,
  })
  title: string;

  @Prop({
    type: String,
    min: 2,
    max: 2550,
    required: true,
  })
  description: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  user: mongoose.Types.ObjectId;

  @Prop({
    type: Date,
    require: true,
  })
  startedAt: Date;

  @Prop({
    type: Date,
    required: false,
    default: null,
  })
  endedAt: Date;
}

export type UserExperienceDocument = UserExperience & Document;

export const UserExperienceSchema =
  SchemaFactory.createForClass(UserExperience);
