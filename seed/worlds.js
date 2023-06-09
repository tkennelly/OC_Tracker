const db = require('../db')
const { Profile, World } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const profile1 = await Profile.find({ username: 'tkennelly'})

    const worlds = [
        {
            name: 'System 223',
            genre: 'Starfinder',
            description: `System 223 is boring. It holds
            about five planets, one of them being Bruscar. There is Sirram,
            where the authorities for the solar system reside,
            Ithe, Beo, and Faic. This is what some call a “passing system”
            meaning one you really don't spend much time in. Bruscar and Beo
            are the most visited places in the system, being the most useful
            and the largest planets respectively, but they aren't very sought
            after. To some other systems, 223 is basically a glorified mall
            with 5 stores.`,
            user: profile1[0]._id
        }
    ]
    await World.insertMany(worlds)
    console.log('Created worlds!')
}

const run = async () => {
    await main()
    db.close()
  }
  run()