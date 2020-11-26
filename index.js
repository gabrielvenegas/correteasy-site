const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.use("/", express.static(__dirname + "/static"));

app.use("/", (req, res) => {
  res.redirect("/index.html");
});
// Listen to the App Engine-specified port, or 8080 otherwise
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
