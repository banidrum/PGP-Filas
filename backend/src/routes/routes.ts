import { Router } from 'express';
import ScheduleController from '../controllers/scheduleController';
import UserController from '../controllers/userController';
import OrganizationController from '../controllers/organizationController';
// @ts-ignore
import passport from 'passport';

const router = Router();

router.post('/user/register', (req, res) => {
    UserController.registerUser(req, res);
});

router.post('/schedule/register', (req, res) => {
    ScheduleController.registerSchedule(req, res)
});

router.delete('/schedule/cancel/:id', (req, res) => {
    ScheduleController.cancelSchedule(req, res)
});

router.post('/organization/register', (req, res) => {
    OrganizationController.registerOrganization(req, res)
})

router.get('/schedule/list-dates', (req, res) => {
    ScheduleController.listSchedule(req, res)
});

router.get('/schedule/list-schedules/:id', (req, res) => {
    ScheduleController.listAllSchedules(req, res)
})

router.post('/user/login', (req, res) => {
    UserController.logon(req, res)
});

router.get('/user/logout', (req, res) => {
    UserController.logout(req, res)
});

export default router;