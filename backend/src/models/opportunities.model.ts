import mongoose, { Schema } from "mongoose";
import { IOpportunities } from "../interface/index.interface";
  
const opportunitiesSchema = new Schema<IOpportunities>({
    event: { type: Schema.Types.ObjectId, required: true,ref: "Event"},
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["pending", "in_progress", "completed"], default: 'pending' },
    start_date: { type: Date, required: true, default: Date.now },
    end_date: { type: Date, required: true },
    responsible: {  type: Schema.Types.ObjectId, required: true ,ref:'User'},
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" ,default:[]}]
    // createBy: { type: String, required: true, default: 'system' },
    // modifiedBy: { type: String },
  },{timestamps:true});
  
  const Opportunities = mongoose.model<IOpportunities>('Opportunity', opportunitiesSchema);

  export { Opportunities };