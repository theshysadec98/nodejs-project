const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var c = 3;
    var a = 5;
    var b = a + c;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})