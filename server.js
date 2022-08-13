const express = require("express");
const db = require("./db/connections");

const apiRoutes = require("./routes/apiRoutes"); //node automatically looks for index.js

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use api routes
app.use("/api", apiRoutes);

//default response to any other request(not found)
app.use((req, res) => {
  res.status(404).end();
});

//start server after db connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
