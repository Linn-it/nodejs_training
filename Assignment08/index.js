import * as dotenv from 'dotenv';
import express from 'express';
import { MongoClient } from 'mongodb';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const dbUrl = process.env.DB;

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));

MongoClient.connect(dbUrl, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database');
        const db = client.db('CRUD-Atlas-Testing');
        const quotesCollection = db.collection('quotes');

        app.get('/', (req, res) => {
            db.collection('quotes')
              .find()
              .toArray()
              .then(results => {
                res.render('index.ejs', { quotes: results })
              })
              .catch(error => console.error(error))
          })

          app.post('/quotes', (req, res) => {
            quotesCollection
              .insertOne(req.body)
              .then(result => {
                console.log(result);
                res.redirect('/')
              })
              .catch(error => console.error(error))
          })
      
          app.put('/quotes', (req, res) => {
            quotesCollection.findOneAndUpdate(
              { name: 'Yoda' },
              {
                $set: {
                  name: req.body.name,
                  quote: req.body.quote
                }
              },
              {
                upsert: true
              }
            )
              .then(result => console.log('Success'))
              .catch(error => console.error(error))
          })
      
          app.delete('/quotes', (req, res) => {
            quotesCollection
              .deleteOne({ name: req.body.name })
              .then(result => {
                if (result.deletedCount === 0) {
                  return res.json('No quote to delete')
                }
                res.json(`Deleted Darth Vader's quote`)
              })
              .catch(error => console.error(error))
          })

        app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))
    })
    .catch(error => console.log(error));