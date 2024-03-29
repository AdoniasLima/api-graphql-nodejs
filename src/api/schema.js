const resolvers = require("./resolvers")
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = `
    type User {
        id: ID
        name: String
        email: String
        passaword: String
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput {
        id: ID,
        name: String!
        email: String!
        password: String!
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });