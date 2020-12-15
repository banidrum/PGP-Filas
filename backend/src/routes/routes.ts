import { Router } from 'express';
import ScheduleController from '../controllers/scheduleController';
import UserController from '../controllers/userController';
import OrganizationController from '../controllers/organizationController';

const router = Router();

router.post('/user/register', (req, res) => {
    console.log(`REQUEST BODY -------> ${req.body}`)

    UserController.registerUser(req, res);
});

router.post('/schedule/register', (req, res) => {
    ScheduleController.registerSchedule(req, res)
});

router.post('/organization/register', (req, res) => {
    OrganizationController.registerOrganization(req, res)
})

router.get('/schedule/list-dates', (req, res) => {
    ScheduleController.listSchedule(req, res)
});

export default router;