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
    await Story.deleteMany({})
    await Story.insertMany([
        {
            title: "Where to go...",
            segment: "You are walking down the street when you see a shiny object partway down the alley to your right. You look at it with curiosity. Do you go see what it is...or do you keep walking?",
            option1: "Go see what it is.",
            option2: "Keep walking...",
            nextPageA: "p2a",
            nextPageB: "p2b",
            notes: ""
        },
        {
            title: "The Shiny Object",
            segment: "You walk up to the shiny object and see that it's a locket. It looks somewhat familiar, but you can't remember if you've seen it before or not.",
            option1: "Open the locket.",
            option2: "Put it back down.",
            nextPageA: "p3a",
            nextPageB: "p3b",
            notes: ""
        },
        {
            title: "Moving on...",
            segment: "You keep walking, but as you do, you start to wonder about the shiny object more. For some reason, it doesn't leave your thoughts.",
            option1: "Go back to pick it up.",
            option2: "Shrug and keep walking.",
            nextPageA: "p3c",
            nextPageB: "p3d",
            notes: ""
        }
    ])
    // const story = new Story({
    //     title: "",
    //     segment: "",
    //     option1: "",
    //     option2: "",
    //     nextPageA: "",
    //     nextPageB: ""
    // })
    // await story.save()
}

seedDB().then(() => {
    mongoose.connection.close()
})

