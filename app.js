require('dotenv').config();
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const dbConnect = require('./api/config/database');
const schema = require('./api/graphql/schema');

const app = express();
const PORT = process.env.PORT || 4000;

// Models
const User = require('./api/models/User');

// Connect to the MongoDB
dbConnect();

const server = new ApolloServer({ schema, context: { User } });
server.applyMiddleware({ app });

app.listen(PORT, err => {
  if (err) {
    console.log(`Oh damn! Could not connect to the server!!`);
  }

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
});
