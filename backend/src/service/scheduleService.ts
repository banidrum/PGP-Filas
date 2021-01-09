import Agendamento from '../database/Agendamento';

const scheduleService = { 
    async registerSchedule(schedule) {
        
        const createSchedule = await Agendamento.create({
            id_usuario: schedule.id_usuario,
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
    },

    async listAllSchedules(id) {

      const listAllSchedules = await Agendamento.findAll({
        where: {
            id_usuario: id
        }
    })
      
      return listAllSchedules;
    },

    async cancelSchedule(scheduleId) {
        const deleteSchedule = await Agendamento.destroy(
            {
                where: {
                    id: scheduleId
                }
            }
        )
        
        return deleteSchedule;
    }

 }

export default scheduleService;