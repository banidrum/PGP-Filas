import express from 'express';
import router from './routes/routes';
import cors from 'cors';
const session = require('express-session')

const bodyParser = require('body-parser');

const app = express();

app.use(session({
    secret:"filas",cookie:{maxAge:50000}
}))

app.use(express.static('frontend'))
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

export default app;