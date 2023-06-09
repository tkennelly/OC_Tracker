const { Schema } = require('mongoose')

const OC = new Schema(
    {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      gender: { type: String, required: true },
      race: { type: String },
      appearence: { type: String },
      backstory: { type: String, required: true },
      worldId: {  type: Schema.Types.ObjectId, ref: 'world'}
    },
    { timestamps: true }
)

module.exports = OC