const http = require("http");
const app = require("./app");
const server = http.createServer(app);
require("./database/db"); //import the database

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const port = process.env.PORT || 3031;

server.listen(port, () => {
  console.log(`Server is running on http://13.234.110.206:${port}`);
})
