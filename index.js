const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    "hey" : "Docker are you ready to build"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})