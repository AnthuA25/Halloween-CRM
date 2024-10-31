import mongoose, { Schema, model, connect } from 'mongoose';
import { IParticipant } from '../interface/index.interface';

const  ParticipantSchema = new Schema<IParticipant>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  event:{type: Schema.Types.ObjectId,ref:'Event'},
  quantity:{ type: Number, required: true }
},{ timestamps:true })


const Participant = mongoose.model<IParticipant>('Participant', ParticipantSchema);

export {Participant};
