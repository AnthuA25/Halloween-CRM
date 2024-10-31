// src/services/participant.service.ts
import { IParticipant } from "../interface/index.interface";
import { Participant } from "../models/participant.model";

const createParticipantService = async (participantData:IParticipant):Promise<IParticipant> => {
    const newParticipant = new Participant(participantData);
    return await newParticipant.save();
};

const getParticipantsService = async () :Promise<IParticipant[]> => {
    return await Participant.find().populate('event');
};

const getParticipantByIdService = async (id: string):Promise<IParticipant | null>  => {
    return await Participant.findById(id).populate('event');
};

const updateParticipantService = async (id: string, updateData: Partial<IParticipant>):Promise<IParticipant | null>  => {
    return await Participant.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteParticipantService = async (id: string):Promise<IParticipant | null> => {
    return await Participant.findByIdAndDelete(id);
};

export {
    createParticipantService,
    getParticipantsService,
    getParticipantByIdService,
    updateParticipantService,
    deleteParticipantService
};
