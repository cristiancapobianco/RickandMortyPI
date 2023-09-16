const express = require("express");
const router = require("./routes/routes");
const server = express();

server.use("/rickandmorty", router)


server.listen(3001, () => {
    console.log("todo esta ok");
})