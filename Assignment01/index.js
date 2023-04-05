
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/calcage', (req, res) => {
  const birthDate = new Date(req.body.date);
  const today = new Date();
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  const data = {
    ageYears,
    ageMonths,
    ageDays
  }
  res.render('index', { data: data });
});

app.listen(4444, () => {
  console.log('Server is running on port 4444');
})