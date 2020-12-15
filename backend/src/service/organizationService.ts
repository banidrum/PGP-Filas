// import Orgao from '../database/Orgao';

const organizationService = {
    async registerOrganization(organization) {

        const createOrganization = await Orgao.create({
            nome: organization.name,
            endereco: organization.address,
            telefone: organization.phone,
            email: organization.email
        })

        return createOrganization;
    }
}

export default organizationService;