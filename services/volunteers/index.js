const fs = require('fs')
// access global mock db file
const volunteers = require(global.mock_db)

// write service method implementations
const volunteers_service = {
    getAll() {
        return volunteers
    }
}

module.exports = volunteers_service
