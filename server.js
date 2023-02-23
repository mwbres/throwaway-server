const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/isodd/:number", (req, res) => {
  const number = parseInt(req.params["number"]);
  res.send(number % 2 !== 0);

});

app.listen(port, () => console.log(`App listening on port ${port}`));