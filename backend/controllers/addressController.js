const Address = require("../models/addressModel");

exports.addAddress = (req, res) => {
    const {customer_id, street, city, state, zip} = req.body;
    if (!customer_id || !street || !city || !state || !zip) {
        return res.status(400).json({ error: "All fields are required" });
    }

    Address.create(customer_id, street, city, state, zip, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Address added successfully", data});
    });
};

exports.getAddressByCustomer = (req, res) => {
    const {customerId} = req.params;
    Address.findByCustomer(customerId, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ data: rows });
    });
};

exports.updateAddress = (req, res) => {
    const { id } = req.params;
    const { street, city, state, zip} = req.body;

    Address.update(id, street, city, state, zip, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Address updated", rows});
    });
};

exports.deleteAddress = (req, res) => {
  const { id } = req.params;

  Address.delete(id, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Address deleted", data });
  });
};
