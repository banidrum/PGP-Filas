import organizationService from '../service/organizationService';

const organizationController = {
    registerOrganization(req, res) {
        const organization = req.body.organization;

        organizationService.registerOrganization(organization)
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })

        res.json("Organization created with success.")
    }
} 

export default organizationController;

