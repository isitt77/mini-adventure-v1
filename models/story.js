const mongoose = require("mongoose")
const Schema = mongoose.Schema


const storySchema = new Schema({
    title: String,
    segment: String,
    option1: String,
    option2: String
})

const Story = mongoose.model("Story", storySchema)
module.exports = Story