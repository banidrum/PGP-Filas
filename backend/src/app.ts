import express from 'express';
import router from './routes/routes';
import cors from 'cors';
import passport from 'passport';

const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use(router);

export default app;