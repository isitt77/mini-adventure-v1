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
            title: "The walk home...",
            segment1: `It’s after dark. You’re walking home from work, but will stop at the convenience store to buy some things. As you’re walking, you see a shiny object reflecting off a nearby streetlight. Do you go see what it is? Or keep walking?`,
            option1: "Go see what it is.",
            option2: "Keep walking...",
            nextPageA: "p2a",
            nextPageB: "p2b",
            notes: ""
        },
        {
            title: "The Shiny Object",
            segment1: ``,
            option1: "Open the locket.",
            option2: "Put it back down.",
            nextPageA: "p3a",
            nextPageB: "p3b",
            notes: ""
        },
        {
            title: "Moving on...",
            segment1: "You keep walking, but as you do, you start to wonder about the shiny object more. For some reason, it doesn't leave your thoughts.",
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