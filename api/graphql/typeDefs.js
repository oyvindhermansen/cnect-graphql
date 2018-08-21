const { mergeTypes } = require('merge-graphql-schemas');
const userType = require('./user/typeDefs');

const types = [userType];

const typeDefs = mergeTypes(types);
module.exports = typeDefs;
