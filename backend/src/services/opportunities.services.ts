import { IOpportunities } from "../interface/index.interface";
import { Opportunities } from "../models/opportunities.model";

const createAnOpportunity = async (opportunityData:IOpportunities):Promise<IOpportunities> => {
    const opportunity = new Opportunities(opportunityData);
    return await opportunity.save();
}

const getOpportunities = async () : Promise<IOpportunities[]>=> {
    return await Opportunities.find().populate({
        path: 'event',
        model: 'Event',
    }).populate('tasks');
}


const getAnOpportunity = async (id: string): Promise<IOpportunities | null>=> {
    return await Opportunities.findById(id).populate('event responsible tasks');
}


const updateAnOpportunity = async (id: string,opportunityData: Partial<IOpportunities>):Promise<IOpportunities | null>=> {
    return await Opportunities.findByIdAndUpdate(id, opportunityData, { new: true }).populate('event responsible tasks');
}


const deleteAnOpportunity = async (id: string): Promise<IOpportunities | null> => {
    return await Opportunities.findByIdAndDelete(id)
}

export { createAnOpportunity, getOpportunities,getAnOpportunity,updateAnOpportunity,deleteAnOpportunity} 