// src/controllers/participant.controller.ts
import { Request, Response } from 'express';
import {
    createParticipantService,
    getParticipantsService,
    getParticipantByIdService,
    updateParticipantService,
    deleteParticipantService
} from '../services/participant.services';

const createParticipant = async (req: Request, res: Response) => {
    try {
        const newParticipant = await createParticipantService(req.body);
        res.status(201).json({
            message: "Participant created successfully",
            participant: newParticipant,
        });
    } catch (error) {
        console.error("Error creating participant:", error);
        res.status(500).json({
            message: "Error creating participant",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};

const getParticipants = async (req: Request, res: Response) => {
    try {
        const participants = await getParticipantsService();
        res.status(200).json({ message: "Participantes obtenidos", participants });
    } catch (error) {
        res.status(500).json(error);
    }
};

const getParticipantById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const participant = await getParticipantByIdService(id);
        if (!participant) {
            res.status(404).json({ message: "No se encontró el participante" });
            return;
        }
        res.status(200).json(participant);
    } catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
};

const updateParticipant = async (req: Request, res: Response)=> {
    const id = req.params.id;
    try {
        const updatedParticipant = await updateParticipantService(id, req.body);

        if (!updatedParticipant) {
            res.status(404).json({ message: "Participante no encontrado" });
            return
            
        }

        res.status(200).json({
            message: "Participante actualizado con éxito",
            participant: updatedParticipant,
        });
    } catch (error) {
        console.error("Error actualizando participante:", error);
        res.status(500).json({
            message: "Error actualizando participante",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
};

const deleteParticipant = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    
    try {
        const deletedParticipant = await deleteParticipantService(id);

        if (!deletedParticipant) {
            res.status(404).json({ message: "Participante no encontrado" });
            return;
        }

        res.status(200).json({
            message: "Participante eliminado con éxito",
            participant: deletedParticipant,
        });
    } catch (error) {
        console.error("Error eliminando participante:", error);
        res.status(500).json({
            message: "Error eliminando participante",
            error: error instanceof Error ? error.message : "Error desconocido!!!",
        });
    }
};

export {
    createParticipant,
    getParticipants,
    getParticipantById,
    updateParticipant,
    deleteParticipant
};