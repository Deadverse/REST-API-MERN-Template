require('dotenv').config();
const mongoose = require('mongoose');

const dbContext = async (dbConnectTimeout) => {
    try {
        console.info('Connecting to MongoDB...');
        let dbOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            serverSelectionTimeoutMS: dbConnectTimeout,
        }

        await mongoose.connect(process.env.DATABASE_URI, dbOptions);
        console.info('Connected to Database: ' + process.env.DATABASE_NAME);
    }
    catch (err) {
        console.error(err);
    }
}


module.exports = dbContext;