require('dotenv').config();
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./app/GraphQL/schema');
const resolvers = require('./app/GraphQL/resolvers');


const server = new ApolloServer({typeDefs, resolvers});

const PORT = process.env.PORT || 3000;

server.listen(PORT).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
})