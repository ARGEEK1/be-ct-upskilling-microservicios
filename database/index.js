const server = require("./src/server");

const PORT = 8004;

server.listen(PORT, () => {
  console.log("Database service on PORT 8004");
});
