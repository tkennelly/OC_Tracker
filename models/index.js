const mongoose = require('mongoose')
const ProfileSchema = require('./profile')
const WorldSchema = require('./world')
const OCSchema = require('./oc')


const Profile = mongoose.model('Profile', ProfileSchema)
const World = mongoose.model('World', WorldSchema)
const OC = mongoose.model('OC', OCSchema)

module.exports = {
  Profile,
  World,
  OC
}