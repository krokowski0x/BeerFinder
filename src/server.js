const express = require("express");
// This server is here in case of deployment to Heroku
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(port, () => console.log(`App is running on port ${port}!`));
