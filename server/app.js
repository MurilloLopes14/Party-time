const express = require("express");
const cors = require("cors");
const dbConn = require("./db/config");
const routes = require("./routes/router");

const app = express();
const port = 3000 || "";

app.use(express.json());
app.use(cors());
app.use("/partytime", routes);

//* DB connection
dbConn();

app.listen(port, () => {
  console.log(`App runing on http://localhost:${port}`);
});
