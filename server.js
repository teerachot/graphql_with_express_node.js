
const {app,server} = require('./app')
const dotenv = require('dotenv')
dotenv.config()
const http = require('http').createServer(app)

const port = process.env.PORT || "3000"
http.listen(port,()=>{
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
})