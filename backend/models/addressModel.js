const db = require("../config/db");

const Address = {
    create: (customerId, street, city, state, zip, callback) => {
        const sql = `INSERT INTO addresses (customer_id, street, city, state, zip) VALUES (?, ?, ?, ?, ?)`;
        db.run(sql, [customerId, street, city, state, zip], function (err) {
            callback(err, { id: this.lastID});
        });
    },

    findByCustomer: (customerId, callback) => {
        const sql = `SELECT * FROM addresses WHERE customer_id = ?`;
        db.all(sql, [customerId], (err, rows) => {
            callback(err, rows);
        });
    },

    update: (id, street, city, state, zip, callback) => {
        const sql = `UPDATE addresses SET street=?, city=?, state=?, zip=? WHERE address_id=?`;
        db.run(sql, [street, city, state, zip, id], function (err) {
            callback(err, {changes: this.changes });
        });
    },

    delete: (id, callback) => {
        const sql = `DELETE FROM addresses WHERE address_id=?`;
        db.run(sql, [id], function(err) {
            callback(err, {changes: this.changes});
        });
    },
};

module.exports = Address;