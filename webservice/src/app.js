import "@babel/polyfill";
import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import db from './database';
import bodyParser from 'body-parser';
import passport from 'passport';
import securityStrategy from './security';
import logger from './logger';


if (process.env.NODE_ENV !== 'production') {
    dotenv.config({
        path: '../',
    });
}

logger.log('info', `Running in >>${process.env.NODE_ENV}<< mode.`);

const app = express();
const port = 8000;

passport.use(securityStrategy);

app.set('port', process.env.port || port);
app.set('db', db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, }));

app.use('/', routes);

app.listen(port, () => {
    logger.log('info', `Server running on port: ${port}`);
});
