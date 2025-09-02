const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Create/Open database file
const db = new sqlite3.Database(
  path.resolve(__dirname, "../database.sqlite"),
  (err) => {
    if (err) {
      console.error("Error opening database:", err.message);
    } else {
      console.log("✅ Connected to SQLite database");
    }
  }
);

// Initialize tables
db.serialize(() => {
  // Customers table
  db.run(`
    CREATE TABLE IF NOT EXISTS customers (
      customer_id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      phone_number TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      city TEXT
    )
  `);

  // Addresses table (linked to customers)
  db.run(`
    CREATE TABLE IF NOT EXISTS addresses (
      address_id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_id INTEGER NOT NULL,
      street TEXT NOT NULL,
      city TEXT NOT NULL,
      state TEXT,
      zip_code TEXT,
      FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
    )
  `);
});

module.exports = db;