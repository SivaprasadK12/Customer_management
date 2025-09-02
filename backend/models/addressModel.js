const db = require("../config/db");

const Customer = {
    getAll: (callback) => {
        db.all("SELECT * FROM customers", [], callback);
    },

    getById: (id, callback) => {
        db.get("SELECT * FROM customers WHERE customer_id = ?", [id], callback);
    },

    create: (customer, callback) => {
        const {first_name, last_name, phone_number, email, city} = customer;
        db.run(
            "INSERT INTO customers (first_name, last_name, phone_number, email, city) VALUES (?, ?, ?, ?, ?)",
            [first_name, last_name, phone_number, email, city],
            function(err) {
                callback(err, { customer_id:this.lastID, ...customer });
            }
        );
    },

    update: (id, customer, callback) => {
        const {first_name, last_name, phone_number, email, city} = customer;
        db.run(
            "UPDATE customers SET first_name = ?, last_name = ?, phone_number = ? WHERE id = ?", 
            [first_name, last_name, phone_number, email, city, id],
            function (err) {
                callback(err, {changes: this.changes});
            }
        );
    },

    delete: (id, callback) => {
        db.run("DELETE FROM customers WHERE id = ?", [id], function (err) {
            callback(err, {changes: this.changes })
        });
    },
};

module.exports = Customer;