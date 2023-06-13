const { Schema } = require('mongoose')

const World = new Schema(
    {
      name: { type: String, required: true },
      genre: { type: String, required: true },
      description: { type: String, required: true },
      user: { type: Schema.Types.ObjectId, ref: 'profile'},
    },
    { timestamps: true }
)

module.exports = World