require('dotenv').config();

const config = {
    db: {
        uri: process.env.MONGODB_URI,
    },
    server: {
        port: process.env.PORT || 5000,
    },
};

module.exports = config;
