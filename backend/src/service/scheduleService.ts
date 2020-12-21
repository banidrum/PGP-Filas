import Agendamento from '../database/Agendamento';

const scheduleService = { 
    async registerSchedule(schedule) {
        
        const createSchedule = await Agendamento.create({
            local: schedule.local,
            servico: schedule.servico,
            data: new Date()
        })

        return createSchedule;
    },

    async listSchedule() {
        const listSchedule = await Agendamento.findAll({
            attributes: ['data']
        })

        return listSchedule;
    }
}

export default scheduleService;