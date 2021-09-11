const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Story = require("./models/story")
const methodOverride = require("method-override")
const path = require("path")


mongoose.connect("mongodb://localhost:27017/adventure1", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo adventure db open...")
    })
    .catch((err) => {
        console.log("Uh, oh. Mongo connection error!", err)
    })


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
// Connects the path to public directory
app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req, res) => {
    res.render("index")
})

// Request form for page 1
app.get("/story", async (req, res) => {
    const story = await Story.findOne({}) // <-- finding first page of story...
    // res.send(story)
    res.redirect(`/story/${story._id}`) // <-- storing the value and passing it
})                                             // to /story page.


// I don't want the id showing in the url, but this works when I copy and paste the
// story id from the database. But I can't find it with the code below.*
// * Fixed. I needed to submit a post request from index.ejs with the db id attached.

// Story page 1 render
app.get("/story/:id", async (req, res) => {
    const { id } = req.params
    const story = await Story.findById(id)
    res.render("story", { story })
})

// Story page 2 request form
app.get("/story2", async (req, res) => {
    const story2 = await Story.findOne({ _id: "6108dc5c8da8033b0f0b476c" }) // <-- finding first page of story...
    // console.log(story2)
    res.redirect(`/story/${story2._id}`) // <-- storing the value and passing it
})

// Story page 2 render
// app.get("/story2/:id", async (req, res) => {
//     const { id } = req.params
//     const story2 = await Story.findById(id)
//     res.render("story2", { story2 })
// })




app.listen(3000, () => {
    console.log("serving adventure on port 3000...")
})