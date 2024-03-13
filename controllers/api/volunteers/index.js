// import specific service class
const volunteers_service = require('../../../services/volunteers/')

// mention the service's needed actions (methods)
const volunteers_controller = {
    getAll(req, res) {
        res.json(volunteers_service.getAll())
    }
}

module.exports = volunteers_controller
