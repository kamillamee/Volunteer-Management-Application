// import specific service class
const volunteers_service = require('../../../services/volunteers')

// mention the service's needed actions (methods)
const volunteers_controller = {
    getAll(req, res) {
        res.json(volunteers_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            volunteers_service.create(req, res)
        )
    },
    delete(req, res) {
        const volunteers = volunteers_service.getById(req.params.id)
        
        if (volunteers) {
            volunteers_service.delete(req.params.id)
            res.status(204).send('Volunteers deleted successfully')
        } else {
            res.status(404).send('Volunteers not found')
        }
    }
}

module.exports = volunteers_controller
