import mongoose, { Schema } from "mongoose";
import { Itasks } from "../interface/index.interface";

const tasksSchema = new Schema<Itasks>({
  opportunity: { type: Schema.Types.ObjectId, required: true,ref: "Opportunity"},
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["pending", "in_progress", "completed"], default: 'pending' },
  start_date: { type: Date, default: Date.now },
  end_date: { type: Date, required: true },
  assigned_to:[{type:Schema.Types.ObjectId,ref:'User',default:[]}],
}, { timestamps: true });

const Tasks = mongoose.model<Itasks>('Task', tasksSchema);

export { Tasks };