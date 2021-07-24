const express = require('express')
const app = express()
const path = require("path");
const serveStatic = require("serve-static");
const port = 3000

app.use(serveStatic(path.join(__dirname, "build/")));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "ClientApp/build/")));
app.listen(port, () => console.log(`Example app listening on port port!`))