import { Router } from 'express';
const router = Router();

import {
    getAllTutors,
    createTutor,
    updateTutor,
    deleteTutor,
} from '../controllers/tutor';

import { createPet, updatePet, deletePet } from '../controllers/pets';

//tutor routes

router.route('/tutors').get(getAllTutors); //retrieves all tutors

router.route('/tutor').post(createTutor); //create a new tutor

router.route('/tutor/:id').put(updateTutor); //updates a tutor

router.route('/tutor/:id').delete(deleteTutor); //deletes a tutor

//pets routes

router.route('/pet/:tutorId').post(createPet); //creates a pet and adds it to a tutor

router.route('/pet/:petId/tutor/:tutorId').put(updatePet); //updates a pet´s info

router.route('/pet/:petId/tutor/:tutorId').delete(deletePet); //deletes a pet from a tutor

export { router as clientsRoutes };
