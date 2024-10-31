import mongoose, { Schema } from "mongoose";
import { IEvent } from "../interface/index.interface";
  
const eventSchema = new Schema<IEvent>({
    name: { type: String, required: true},
    type: { type: String, required: true},
    status: { type: String, enum: ['open', 'closed'], required:true,default:'open' },
    start_date: { type: Date, required: true, default: Date.now },
    end_date: { type: Date, required: true },
    responsible: {  type: Schema.Types.ObjectId, required: true ,ref:'Users'},
    participants: [{ type: Schema.Types.ObjectId, ref: "Participant" , default: [] }],
    opportunity: [{ type: Schema.Types.ObjectId, ref: "Opportunity", default: []  }]
    // createBy: { type: String, required: true, default: 'system' },
    // modifiedBy: { type: String },
  },{timestamps:true});
  
  const Event = mongoose.model<IEvent>('Event', eventSchema);

  export { Event };