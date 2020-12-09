const {ApolloServer} = require('apollo-server')

const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')
const PORT = process.env.PORT || 4000

const server = new ApolloServer({typeDefs, resolvers})

server.listen(PORT).then(({url}) =>{
    console.log(`🚀  Server ready at ${url}`)
})