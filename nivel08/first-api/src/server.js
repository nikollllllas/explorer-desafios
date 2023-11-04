const express = require("express")

const app = express()

app.get("/message/:id/:user", (req, res) => {
  const { id, user } = req.params

  res.send(`
    Message ID: ${id}.
    User: ${user}.
  `)

})

app.get("/users", (req, res) => {
  const { page, limit } = req.query

  res.send(`
    Page: ${page}.
    Mostrar: ${limit}.
  `)

})


const PORT = 3333
app.listen(PORT, () => {
  console.log("Running on port 3333")
})