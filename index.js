const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;
// const cors = require('cors');

// server.use(cors({
//  origin:"https://hungry-ruby-trunks.cyclic.app/books",
//  "Access-Control-Allow-Credentials": true
// }))
 
server.use(middlewares);
server.use(router);

server.listen(port,()=>{
 console.log("json server started at http://localhost:8000")
});