import dotenv from 'dotenv';
import express from 'express';
import Connection from './db.js';

import userRoute from './routers/userRoute.js';
import passwordReset from './routers/passReset.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

Connection();

app.use("/api/users", userRoute);
app.use("/api/password-reset", passwordReset);

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));

