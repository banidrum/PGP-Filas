import scheduleService from '../service/scheduleService';

const scheduleController = {
    registerSchedule(req, res) {
        const schedule = req.body.schedule;

        scheduleService.registerSchedule(schedule)
        .then((result) => {
            return result
        })
        .catch(err => {
            return err
        });

        res.json("Schedule created with success.")
    },

    listSchedule(req, res) {
        scheduleService.listSchedule()
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            return err
        })
    }
}

export default scheduleController;