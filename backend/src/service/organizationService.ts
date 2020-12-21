import Orgao from '../database/Orgao';

const organizationService = {
    async registerOrganization(organization) {

        const createOrganization = await Orgao.create({
            nome: organization.name,
            email: organization.email,
            telefone: organization.phone,
            endereco: organization.address
        })

        return createOrganization;
    }
}

export default organizationService;