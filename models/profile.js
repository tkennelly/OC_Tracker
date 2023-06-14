const  { Schema } = require('mongoose')

const Profile = new Schema(
    {
        username: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = Profile