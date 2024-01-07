const JSONServer = require('json-server')
const noteAppServer = JSONServer.create()
const router = JSONServer.router("db.json")
const middleware = JSONServer.defaults()
const PORT = 3000 || process.env.PORT
noteAppServer.use(middleware)
noteAppServer.use(router)

noteAppServer.listen(PORT,()=>{
    console.log(`noteAppServer started at port : ${PORT} and waiting for client request`);
})