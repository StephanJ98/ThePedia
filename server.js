const express = require("express")
const cors = require("cors")
const url = require('url')
const MongoClient = require('mongodb').MongoClient
const { ObjectId } = require("mongodb")
const path = require("path")
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 7000
const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
let cachedDb = null

async function connectToDatabase(uri) {
    if (cachedDb) {
        return cachedDb
    }
    const client = await MongoClient.connect(uri, mongodbOptions)
    const db = await client.db(url.parse(uri).pathname.substr(1))
    cachedDb = db
    return db
}

app.use(cors())
app.use(express.json())
app.use(express.static('client/build'))

app.get('/api', (_, res) => {
    res.send({
        msg: 'Salut tout marche bien'
    })
})

app.get("/thes", async (_, res) => {
    try {
        const db = await connectToDatabase(process.env.MONGODB_URI)
        const collection = await db.collection('thes')
        const thepedia = await collection.find({}).toArray()
        return res.json({ thepedia })
    } catch (e) {
        console.log(e);
    }
});

app.get("/tipe/:tipe", async (req, res) => {
    try {
        const clientTipe = req.params.tipe
        const db = await connectToDatabase(process.env.MONGODB_URI)
        const collection = await db.collection('thes')
        const thepedia = await collection.find({ tipe: clientTipe }, {
            projection: {
                _id: 0
            }
        }).toArray()
        return res.json({ thepedia })
    } catch (e) {
        console.log(e);
    }
})

app.get("/like/:id", async (req, res) => {
    try {
        const clientId = req.params.id
        const db = await connectToDatabase(process.env.MONGODB_URI)
        const collection = await db.collection('thes')
        const thepedia = await collection.find({ _id: new ObjectId(clientId) }, {
            projection: {
                _id: 0
            }
        }).toArray()
        if (clientId !== null && thepedia !== null) {
            await collection.updateOne({ _id: new ObjectId(clientId) }, {
                $set: {
                    likes: thepedia[0].likes + 1
                }
            }
            )
            res.sendStatus(200)
        }
    } catch (e) {
        console.log(e);
    }
})

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
    console.log(`Server runs on port : ${PORT}`)
})