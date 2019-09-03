const { ApolloServer, gql } = require('apollo-server-micro')
const hello = require('./hello')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

module.exports = server.createHandler({ path: '/api' })