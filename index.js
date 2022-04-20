require('dotenv').config();
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./GraphQL/schema');
const resolvers = require('./GraphQL/resolvers');

const server = new ApolloServer({typeDefs, resolvers});

const PORT = process.env.PORT;

server.listen(PORT).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
})