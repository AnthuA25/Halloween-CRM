// src/services/participant.service.ts
import { IEvent } from "../interface/index.interface";
import { Event } from "../models/event.model";

const createEventService = async (eventData:IEvent):Promise<IEvent> => {
    const newParticipant = new Event(eventData);
    return await newParticipant.save();
};

const getEventsService = async () :Promise<IEvent[]> => {
    return await Event.find().populate({
        path: 'responsible',
        model: 'User',
        select: 'name email role' 
    }).populate('participants opportunity');
};

const getEventByIdService = async (id: string):Promise<IEvent | null>  => {
    return await Event.findById(id).populate('responsible participants opportunity');
};

const updateEventService = async (id: string, updateData: Partial<IEvent>):Promise<IEvent | null>  => {
    return await Event.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteEventService = async (id: string):Promise<IEvent | null> => {
    return await Event.findByIdAndDelete(id);
};

export {
    createEventService,
    getEventsService,
    getEventByIdService,
    updateEventService,
    deleteEventService
};
