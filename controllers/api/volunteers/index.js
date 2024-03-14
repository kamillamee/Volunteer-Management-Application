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
    }
}

module.exports = volunteers_controller
