const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// cleanCo
// jZjLRcJw9VLqRe6k


const uri = "mongodb+srv://cleanCo:jZjLRcJw9VLqRe6k@cluster0.neyqb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const servicesCollection = client.db("cleanCo").collection("service");

        app.get('/service', async (req, res) => {
            const services = await servicesCollection.find({}).toArray();
            res.send(services);
        });

    } finally {

    }
}
run().catch(console.dir);


app.get('/', async(req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`Port is ON ${port}`);
})

