const fs = require('fs')

// access global mock db file
const volunteers = require(global.mock_db)

// write service method implementations
const volunteers_service = {
    getAll() {
        return volunteers
    },
    getById(id) {
        return volunteers.find(t => t.id == id)
    },    
    create(req, res) {
        let new_id = genRandId(4)
                
        const volunteers = req.body

        const new_volunteers = {
            id: new_id,
            volunteers: volunteers
        }

        volunteers.push(new_volunteers)
        
        writeToFile(volunteers)
        
        return new_volunteers
    },
    update(id, updateData){
        const volunteersIndex = volunteers.findIndex(t => t.id == id)

        if (volunteersIndex === -1) {
            return null
        }

        volunteers[volunteersIndex].volunteers = { ...volunteers[volunteersIndex].volunteers, ...updateData }

        writeToFile(volunteers)

        return volunteers[volunteersIndex]
    },
    delete(id) {
    const index = volunteers.findIndex(u => u.id == id)
    volunteers.splice(index, 1)    
    writeToFile(volunteers)
    }

}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = volunteers_service
