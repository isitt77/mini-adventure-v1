if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Story = require("./models/story")
const methodOverride = require("method-override")
const path = require("path")
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require("helmet")
const { MongoClient } = require('mongodb');

// process.env.DB_URL ||
const mongoUrl = process.env.DB_URL || "mongodb://localhost:27017/adventure1";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo adventure db open...")
    })
    .catch((err) => {
        console.log("Uh, oh. Mongo connection error!", err)
    })

// MongoDB Atlas connection
// const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
// Connects the path to public directory
app.use(express.static(path.join(__dirname, "public")))
app.use(mongoSanitize());
app.use(helmet())

app.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            "script-src": ["'self'", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"],
            "style-src": ["'self'", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"],
        },
    })
);


app.get("/", (req, res) => {
    res.render("index")
})

// Request form for page 1
app.get("/story", async (req, res) => {
    const story = await Story.findOne({ actionCode: "0" }) // <-- finding first page of story...
    // res.send(story)
    res.redirect(`/story/${story._id}`) // <-- storing the value and passing it
})                                             // to /story page.


// Story page 1 render
app.get("/story/:id", async (req, res) => {
    const { id } = req.params
    const story = await Story.findById(id)
    res.render("story", { story })
})

// Story page 1A request form
app.get("/1A", async (req, res) => {
    const story1A = await Story.findOne({ actionCode: "1A" })
    res.redirect(`/story/${story1A._id}`)
})


// Story page 1B request form
app.get("/1B", async (req, res) => {
    const story1B = await Story.findOne({ actionCode: "1B" })
    res.redirect(`/story/${story1B._id}`)
})


// Story page 1A2A request form
app.get("/1A2A", async (req, res) => {
    const story1A2A = await Story.findOne({ actionCode: "1A2A" })
    res.redirect(`/story/${story1A2A._id}`)
})


// Story page 1A2B request form
app.get("/1A2B", async (req, res) => {
    const story1A2B = await Story.findOne({ actionCode: "1A2B" })
    res.redirect(`/story/${story1A2B._id}`)
})


// 1B2A 
app.get("/1B2A", async (req, res) => {
    const story1B2A = await Story.findOne({ actionCode: "1B2A" })
    res.redirect(`/story/${story1B2A._id}`)
})


// 1B2B
app.get("/1B2B", async (req, res) => {
    const story1B2B = await Story.findOne({ actionCode: "1B2B" })
    res.redirect(`/story/${story1B2B._id}`)
})


// 1A2A3A
app.get("/1A2A3A", async (req, res) => {
    const story1A2A3A = await Story.findOne({ actionCode: "1A2A3A" })
    res.redirect(`/story/${story1A2A3A._id}`)
})


// 1A2A3B 
app.get("/1A2A3B", async (req, res) => {
    const story1A2A3B = await Story.findOne({ actionCode: "1A2A3B" })
    res.redirect(`/story/${story1A2A3B._id}`)
})


// 1A2B3A
app.get("/1A2B3A", async (req, res) => {
    const story1A2B3A = await Story.findOne({ actionCode: "1A2B3A" })
    res.redirect(`/story/${story1A2B3A._id}`)
})


// 1A2B3B 
app.get("/1A2B3B", async (req, res) => {
    const story1A2B3B = await Story.findOne({ actionCode: "1A2B3B" })
    res.redirect(`/story/${story1A2B3B._id}`)
})


// 1B2A3A
app.get("/1B2A3A", async (req, res) => {
    const story1B2A3A = await Story.findOne({ actionCode: "1B2A3A" })
    res.redirect(`/story/${story1B2A3A._id}`)
})


// 1B2A3B
app.get("/1B2A3B", async (req, res) => {
    const story1B2A3B = await Story.findOne({ actionCode: "1B2A3B" })
    res.redirect(`/story/${story1B2A3B._id}`)
})


// 1A2A3B4A
app.get("/1A2A3B4A", async (req, res) => {
    const story1A2A3B4A = await Story.findOne({ actionCode: "1A2A3B4A" })
    res.redirect(`/story/${story1A2A3B4A._id}`)
})


// 1A2A3B4B <-- followed by n1 in next route
app.get("/1A2A3B4B", async (req, res) => {
    const story1A2A3B4B = await Story.findOne({ actionCode: "1A2A3B4B" })
    res.redirect(`/story/${story1A2A3B4B._id}`)
})


// 1A2A3B4Bn1  <-- follows above route
app.get("/1A2A3B4Bn1", async (req, res) => {
    const story1A2A3B4Bn1 = await Story.findOne({ actionCode: "1A2A3B4Bn1" })
    res.redirect(`/story/${story1A2A3B4Bn1._id}`)
})


// 1A2B3A4A <-- followed by n1 in next route
app.get("/1A2B3A4A", async (req, res) => {
    const story1A2B3A4A = await Story.findOne({ actionCode: "1A2B3A4A" })
    res.redirect(`/story/${story1A2B3A4A._id}`)
})


// 1A2B3A4An1 <-- follows above route
app.get("/1A2B3A4An1", async (req, res) => {
    const story1A2B3A4An1 = await Story.findOne({ actionCode: "1A2B3A4An1" })
    res.redirect(`/story/${story1A2B3A4An1._id}`)
})


// 1A2B3A4An2 <-- follows above route
app.get("/1A2B3A4An2", async (req, res) => {
    const story1A2B3A4An2 = await Story.findOne({ actionCode: "1A2B3A4An2" })
    res.redirect(`/story/${story1A2B3A4An2._id}`)
})


// 1A2B3A4B
app.get("/1A2B3A4B", async (req, res) => {
    const story1A2B3A4B = await Story.findOne({ actionCode: "1A2B3A4B" })
    res.redirect(`/story/${story1A2B3A4B._id}`)
})


// 1B2A3A4A
app.get("/1B2A3A4A", async (req, res) => {
    const story1B2A3A4A = await Story.findOne({ actionCode: "1B2A3A4A" })
    res.redirect(`/story/${story1B2A3A4A._id}`)
})


// 1B2A3A4B
app.get("/1B2A3A4B", async (req, res) => {
    const story1B2A3A4B = await Story.findOne({ actionCode: "1B2A3A4B" })
    res.redirect(`/story/${story1B2A3A4B._id}`)
})


// 1B2A3B4A
app.get("/1B2A3B4A", async (req, res) => {
    const story1B2A3B4A = await Story.findOne({ actionCode: "1B2A3B4A" })
    res.redirect(`/story/${story1B2A3B4A._id}`)
})


// 1B2A3B4B
app.get("/1B2A3B4B", async (req, res) => {
    const story1B2A3B4B = await Story.findOne({ actionCode: "1B2A3B4B" })
    res.redirect(`/story/${story1B2A3B4B._id}`)
})


// 1A2B3A4B5A  <-- followed by n1 in next route
app.get("/1A2B3A4B5A", async (req, res) => {
    const story1A2B3A4B5A = await Story.findOne({ actionCode: "1A2B3A4B5A" })
    res.redirect(`/story/${story1A2B3A4B5A._id}`)
})


// 1A2B3A4B5An1  <-- follows above route
app.get("/1A2B3A4B5An1", async (req, res) => {
    const story1A2B3A4B5An1 = await Story.findOne({ actionCode: "1A2B3A4B5An1" })
    res.redirect(`/story/${story1A2B3A4B5An1._id}`)
})


// 1A2B3A4B5B
app.get("/1A2B3A4B5B", async (req, res) => {
    const story1A2B3A4B5B = await Story.findOne({ actionCode: "1A2B3A4B5B" })
    res.redirect(`/story/${story1A2B3A4B5B._id}`)
})


// 1B2A3A4B5A
app.get("/1B2A3A4B5A", async (req, res) => {
    const story1B2A3A4B5A = await Story.findOne({ actionCode: "1B2A3A4B5A" })
    res.redirect(`/story/${story1B2A3A4B5A._id}`)
})


// 1B2A3A4B5B   <-- followed by n1 in next route
app.get("/1B2A3A4B5B", async (req, res) => {
    const story1B2A3A4B5B = await Story.findOne({ actionCode: "1B2A3A4B5B" })
    res.redirect(`/story/${story1B2A3A4B5B._id}`)
})


// 1B2A3A4B5Bn1  <-- Follows above route
app.get("/1B2A3A4B5Bn1", async (req, res) => {
    const story1B2A3A4B5Bn1 = await Story.findOne({ actionCode: "1B2A3A4B5Bn1" })
    res.redirect(`/story/${story1B2A3A4B5Bn1._id}`)
})


// 1B2A3A4B5C
app.get("/1B2A3A4B5C", async (req, res) => {
    const story1B2A3A4B5C = await Story.findOne({ actionCode: "1B2A3A4B5C" })
    res.redirect(`/story/${story1B2A3A4B5C._id}`)
})


// 1B2A3A4B5C6A   <-- followed by n1 in next route
app.get("/1B2A3A4B5C6A", async (req, res) => {
    const story1B2A3A4B5C6A = await Story.findOne({ actionCode: "1B2A3A4B5C6A" })
    res.redirect(`/story/${story1B2A3A4B5C6A._id}`)
})


// 1B2A3A4B5C6An1   <-- Follows above route
app.get("/1B2A3A4B5C6An1", async (req, res) => {
    const story1B2A3A4B5C6An1 = await Story.findOne({ actionCode: "1B2A3A4B5C6An1" })
    res.redirect(`/story/${story1B2A3A4B5C6An1._id}`)
})


// 1B2A3A4B5C6B     <-- followed by n1 in next route
app.get("/1B2A3A4B5C6B", async (req, res) => {
    const story1B2A3A4B5C6B = await Story.findOne({ actionCode: "1B2A3A4B5C6B" })
    res.redirect(`/story/${story1B2A3A4B5C6B._id}`)
})


// 1B2A3A4B5C6Bn1    <-- Follows above route
app.get("/1B2A3A4B5C6Bn1", async (req, res) => {
    const story1B2A3A4B5C6Bn1 = await Story.findOne({ actionCode: "1B2A3A4B5C6Bn1" })
    res.redirect(`/story/${story1B2A3A4B5C6Bn1._id}`)
})







const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`serving adventure on port ${port}...`)
})