const Story = require("../models/story")
const { MongoClient } = require('mongodb');

const mongoUrl = process.env.DB_URL || "mongodb://localhost:27017/adventure1";

const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

