const db = require('../db')
const { Profile } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const profiles = [
        {
            name: 'Theresa',
            username: tkennelly
        }
    ]
    await Profile.insertMany(profiles)
    console.log('Created profiles!')
}

const run = async () => {
    await main()
    db.close()
  }
  run()