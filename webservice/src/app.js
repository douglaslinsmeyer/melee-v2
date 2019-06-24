import "@babel/polyfill";
import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import db from './database';
import bodyParser from 'body-parser';
import passport from 'passport';
import securityStrategy from './security';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config({
        path: '../',
    });         
}

console.log(`Running in >>${process.env.NODE_ENV}<< mode.`);

const app = express();
const port = 8000;

passport.use(securityStrategy);

app.set('port', process.env.port || port);
app.set('db', db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, }));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`); 
});