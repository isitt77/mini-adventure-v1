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
            actionCode: "0",
            segment1: `It’s after dark. You’re walking home from work, but will stop at the convenience store to buy some things. As you’re walking, you see a shiny object reflecting off a nearby streetlight. Do you go see what it is? Or keep walking?`,
            optionA: "Go see what it is.",
            optionB: "Keep walking...",
            actionA: "1A",
            actionB: "1B"
        },
        {
            title: "The Shiny Object",
            actionCode: "1A",
            segment1: `You walk up to the object. It’s a locket, round and silver on a snake chain. You pick it up. Do you open it? Or put it back down?`,
            optionA: "Open it",
            optionB: "Put it down",
            actionA: "1A2A",
            actionB: "1A2B"
        },
        {
            title: "Moving on...",
            actionCode: "1B",
            segment1: `You keep walking, but you keep wondering what it was. Do you go back and check? Or do you shrug and keep walking.`,
            optionA: "Go back",
            optionB: "Keep walking",
            actionA: "1B2A",
            actionB: "1B2B"
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