import express from 'express';
import router from './routes/route.js'

const app = express();
app.use(express.json());
app.use('/api',router);

//app.get('/', (req, res) => {
//  res.send('This is Assignment 03');
//});

app.listen(8081, () => console.log('Server is running on port 8081'));