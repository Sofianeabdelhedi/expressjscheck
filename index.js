const express = require("express");
const app = express();
const workTime = require("./middlewares/workTime");

app.use(workTime);
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(`Server running on port PORT ${PORT}...`)
);
