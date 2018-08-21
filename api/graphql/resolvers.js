const { mergeResolvers } = require('merge-graphql-schemas');
const userResolver = require('./user/resolver');

const resolversToArray = [userResolver];
const resolvers = mergeResolvers(resolversToArray);

module.exports = resolvers;
