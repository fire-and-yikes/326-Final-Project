const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;


app.get('/api/items', (req, res) => {
  db.collection('items').find().toArray().then(items => {
    const metadata = { total_count: items.length };
    res.json({ _metadata: metadata, records: items })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});


app.post('/api/items', (req, res) => {
  const newItem = req.body;


  
  db.collection('items').insertOne(newItem).then(result =>
    db.collection('items').find({ _id: result.insertedId }).limit(1).next()
  ).then(newItem => {
    res.json(newItem);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});
  

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('menu');
  app.listen(3000, () => {
    console.log('App started on port 3000');
});

app.use(express.body_parser)
app.use(express.mongo)
  }).catch(error => {
  console.log('ERROR:', error);
});
