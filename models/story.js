const mongoose = require("mongoose")
const Schema = mongoose.Schema


const storySchema = new Schema({
    title: String,
    segment1: String,
    segment2: String,
    segment3: String,
    segment4: String,
    segment5: String,
    option1: String,
    option2: String,
    option3: String,
    nextPageA: String,
    nextPageB: String,
    nextPageC: String,
    notes: String
})

const Story = mongoose.model("Story", storySchema)
module.exports = Story