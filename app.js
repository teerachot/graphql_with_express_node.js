const cors = require('cors')
const express = require('express')
const app = express() 
const {ApolloServer,gql} = require('apollo-server-express')

// const {makeExecutableSchema} = require('graphql-tools')

const typeDefs = gql(`
    type Query{
        greeting: String
    }
`)

const resolvers = {
    Query:{
        greeting:() => "Hello world"
    }
}

const server =  new ApolloServer({typeDefs,resolvers})



app.use(cors())
app.use(express.json({extended:false}))

// app.get("/",(req,res)=>{
//     console.log("hi from cliet ",req)
//     res.json({"data":"hello word"}).statusCode(200)
// })

// app.get("/graphql",graphqlExpress(schema))
server.applyMiddleware({app})
module.exports = {app,server}