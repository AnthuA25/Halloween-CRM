import { Request, Response } from 'express';
import { createEventService,getEventsService,getEventByIdService,updateEventService,deleteEventService } from '../services/events.services';

const createEventHandler = async (req: Request, res: Response) => {
    try {
        const createdEvent = await createEventService(req.body);
        res.status(201).json({ message: "Evento creada con éxito", created: createdEvent });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el evento", error });
    }
};

const getEventsHandler = async (req: Request, res: Response) => {
    try {
        const events = await getEventsService();
        res.status(200).json({ message: "Eventos obtenidas con éxito", events });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los eventos", error });
    }
};

const getEventHandler = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const event = await getEventByIdService(id);

        if (!event) {
            res.status(404).json({ message: 'Evento no encontrado' });
            return ;
        }
        res.status(200).json({ message: "Evento obtenida con éxito", event });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el evento", error });
    }
}

const updateEventHandler = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const updatedEvent = await updateEventService(id,req.body);
        if (!updatedEvent) {
            res.status(404).json({ message: 'Evento no encontrado' });
            return;
        }
        res.status(200).json({ message: "Evento actualizada con éxito", updatedEvent: updatedEvent });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el evento", error });
    }
}


const deleteEventHandler = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const deletedEvent = await deleteEventService(id);
        if (!deletedEvent) {
            res.status(404).json({ message: 'Evento no encontrado' });
            return;
        }
        res.status(200).json({ message: "Evento eliminada con éxito", delete: deletedEvent });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el evento", error });
    }
}

export { createEventHandler, getEventsHandler,getEventHandler,updateEventHandler,deleteEventHandler} 