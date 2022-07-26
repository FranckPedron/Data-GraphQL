const { Pool } = require('pg');

const client = new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl:{ //on demande d'accepter le fait qu'on ne soit pas en ssl (sécurité)
        rejectUnauthorized:false
    }
});

client.connect();

module.exports =  client;