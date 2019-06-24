import mongoose from 'mongoose';
const connectionString = `mongodb://${process.env.APP_DB_USERNAME}:${process.env.APP_DB_PASSWORD}@${process.env.APP_DB_HOST}:${process.env.APP_DB_PORT}/${process.env.APP_DB_NAME}`;
const db = mongoose.connect(connectionString, { useNewUrlParser: true, });

export default db;