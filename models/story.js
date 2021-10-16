const mongoose = require("mongoose")
const Schema = mongoose.Schema


const storySchema = new Schema({
    title: String,
    actionCode: String,
    segment1: String,
    segment2: String,
    segment3: String,
    segment4: String,
    segment5: String,
    optionA: String,
    optionB: String,
    optionC: String,
    actionA: String,
    actionB: String,
    actionC: String,
    notes: String
})

const Story = mongoose.model("Story", storySchema)
module.exports = Story