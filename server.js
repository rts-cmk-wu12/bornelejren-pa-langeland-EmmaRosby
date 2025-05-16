import express from "express";
import { MongoClient } from "mongodb";

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
const client = new MongoClient(MONGO_CONNECTION_STRING);
const database = client.db("bornelejren");

app.use(express.json());

app.use((req, res, next) => {
  const allowedOrigins = [
    "liveside-link",
    "http://localhost:5173"
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post('/api/sponsers', async (req, res) => {
  try {
    const sponsorData = {
      year: req.body.year,
      company: req.body.company,
      amount: Number(req.body.amount),
      email: req.body.email,
      adress: req.body.adress,
      tlf: req.body.tlf,
      støttetype: req.body.støttetype
    };

    const result = await database.collection('sponsers').insertOne(sponsorData);

    if (result.acknowledged) {
      res.status(201).json({ message: 'Sponsor added successfully' });
    } else {
      res.status(500).json({ message: 'Failed to add sponsor' });
    }
  } catch (error) {
    console.error('Error adding sponsor:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/sponsers', async (_, response) => {
  const data = database.collection('sponsers').find().sort({ year: -1 });

  response.json(await data.toArray());
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});