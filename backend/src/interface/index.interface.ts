import mongoose from "mongoose";
// import { Opportunity } from '../../../Halloween-CRM/src/components/OpportunityTable';

export interface IParticipant {
  email:string;
  name:string;
  event:mongoose.Types.ObjectId;
  quantity:Number
}

export interface IUser {
  // id?: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  company: string;
  role: 'admin' | 'collaborator';
  // createdAt?: Date; 
  createdBy?:string;
  modifiedAt?:Date;
  modifiedBy?:string;
}
export interface IEvent{
  name: string;
  type: string;
  status: 'open' | 'closed';
  start_date: Date;
  end_date: Date;
  responsible:mongoose.Types.ObjectId;
  participants:mongoose.Types.ObjectId[];
  opportunity:mongoose.Types.ObjectId[];
}

export interface IOpportunities {
  event: mongoose.Types.ObjectId;
  name: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  start_date: Date;
  end_date: Date;
  responsible:mongoose.Types.ObjectId;
  tasks:mongoose.Types.ObjectId[];
} 

// export interface ITickets {
//   participant_id: IParticipant,
//   opportunity_id: IOpportunities ,
//   quantity: Number
// }

export interface Itasks{
  user_id: mongoose.Types.ObjectId,
  opportunity: mongoose.Types.ObjectId,
  id: mongoose.Types.ObjectId,
  title: string;
  description: string;
  status: string;
  start_date: Date;
  end_date: Date;
  assigned_to:mongoose.Types.ObjectId[];
  createdBy?:string;
  modifiedAt?:Date;
  modifiedBy?:string;
}

export interface DecodedToken {
  _id: string;
  role: string;
  email: string;
}
