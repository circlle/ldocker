const ronin = require("ronin-server");
const mocks = require("ronin-mocks");
const database = require("ronin-database")

const server = ronin.server();

// console.log("CONNECTIONSTRING ==================> ", process.env.CONNECTIONSTRING)
// database.connect(process.env.CONNECTIONSTRING)

server.use("/foo", (req, res) => {
  return res.json({"foo": "ba"})
})

server.use("/", mocks.server(server.Router(), false, true));

server.listen(8080, () => {
  console.log("listen=======>")
})
