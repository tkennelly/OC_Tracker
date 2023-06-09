const  { Schema } = require('mongoose')

const Profile = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = Profile