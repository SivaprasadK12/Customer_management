const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const customerRoutes = require("./routes/customerRoutes");
const addressRoutes = require("./routes/addressRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to SQLite database
app.use("/api/customers", customerRoutes);
app.use("/api/addresses", addressRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
