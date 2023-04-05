import express from 'express';
import fs from 'fs';

const wstream = fs.createWriteStream('public/data.txt');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/aaa', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let obj = {
    email,
    password
  };
  wstream.write(JSON.stringify(obj));
  const rstream = fs.createReadStream('public/data.txt', 'utf-8');
  let result;
  rstream.on('data', (chunk) => {
    result = JSON.parse(chunk);
    res.render('index', { result: result });
  });
});

app.listen(8081, () => console.log('Server is running on port 8081'));