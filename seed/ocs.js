const db = require('../db')
const { OC, World } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const world1 = await World.find({ name: 'System 223' })

    const ocs = [
        {
            name: 'Pyra',
            age: 23,
            gender: 'female',
            race: 'Andriod',
            appearence: 'i forget how i described her before, fill this in later before u seed',
            backstory: 'oh yeah fill this in too, with all her stuff about the gang',
            worldId: world1[0]._id
        }
    ]
}