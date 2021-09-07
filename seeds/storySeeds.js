const mongoose = require("mongoose")
const Story = require("../models/story")

mongoose.connect("mongodb://localhost:27017/adventure1",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"))
db.once("open", () => {
    console.log("database connected")
})

const seedDB = async () => {
    // await Story.deleteMany({})
    const story = new Story({
        title: "Moving on...",
        segment: "You keep walking, but as you do, you start to wonder about the shiny object more. For some reason, it doesn't leave your thoughts.",
        option1: "Go back to pick it up.",
        option2: "Shrug and keep walking."
    })
    await story.save()
}

seedDB().then(() => {
    mongoose.connection.close()
})

