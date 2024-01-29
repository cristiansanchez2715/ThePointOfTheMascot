const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const port = 4000

app.listen(port, () => {
    console.log("server conectado")
})

app.get("/", (req, res) => {
    res.send("el servidor funciona men")
})