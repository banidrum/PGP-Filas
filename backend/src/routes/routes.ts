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

router.post('/organization/register', (req, res) => {
    OrganizationController.registerOrganization(req, res)
})

router.get('/schedule/list-dates', (req, res) => {
    ScheduleController.listSchedule(req, res)
});

router.post('/user/login', (req, res) => {
    passport.authenticate('local', { failureRedirect: '/login' }),
    UserController.logon(req, res)
});

export default router;