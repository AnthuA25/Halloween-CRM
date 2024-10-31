import { Request, Response } from 'express';
import { createAnOpportunity, getOpportunities,getAnOpportunity,updateAnOpportunity,deleteAnOpportunity} from "../services/opportunities.services";

const createOpportunityHandler = async (req: Request, res: Response) => {
    try {
        const createdOpportunity = await createAnOpportunity(req.body);
        res.status(201).json({ message: "Opportunidad creada con éxito", created: createdOpportunity });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la oportunidad", error });
    }
};

const getOpportunitiesHandler = async (req: Request, res: Response) => {
    try {
        const opportunities = await getOpportunities();
        res.status(200).json({ message: "Oportunidades obtenidas con éxito", opportunities });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las oportunidades", error });
    }
};

const getOpportunityHandler = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const opportunity = await getAnOpportunity(id);

        if (!opportunity) {
            res.status(404).json({ message: 'Oportunidad no encontrada' });
            return ;
        }
        res.status(200).json({ message: "Oportunidad obtenida con éxito", opportunity });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la oportunidad", error });
    }
}

const updateOpportunityHandler = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const updatedOpportunity = await updateAnOpportunity(id,req.body);
        if (!updatedOpportunity) {
            res.status(404).json({ message: 'Oportunidad no encontrada' });
            return;
        }
        res.status(200).json({ message: "Oportunidad actualizada con éxito", updatedOpportunity: updatedOpportunity });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la oportunidad", error });
    }
}


const deleteOpportunityHandler = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const deletedOpportunity = await deleteAnOpportunity(id);
        if (!deletedOpportunity) {
            res.status(404).json({ message: 'Oportunidad no encontrada' });
            return;
        }
        res.status(200).json({ message: "Oportunidad eliminada con éxito", delete: deletedOpportunity });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la oportunidad", error });
    }
}

export { createOpportunityHandler, getOpportunitiesHandler,getOpportunityHandler,updateOpportunityHandler,deleteOpportunityHandler} 