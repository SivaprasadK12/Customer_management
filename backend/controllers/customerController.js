const Customer = require("../models/customerModel");

exports.getAllCustomers = (req, res) => {
    Customer.getAll((err, rows) => {
        if (err) return res.status(500).json({ err: err.message});
        res.json({ data: rows });
    });
};

exports.getCustomerById = (req, res) => {
    const { id } = req.params;
    Customer.getById(id, (err, row) => {
        if (err) return  res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "Customer not found" });
        res.json({ data: row });
    });
};

exports.createCustomer = (req, res) => {
    const {first_name, last_name, phone_number, email, city} = req.body;
    Customer.create({ first_name, last_name, phone_number, email, city }, (err, newCustomer) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Customer created", data: newCustomer});
    });
};

exports.updateCustomer = (req, res) => {
    const { id } = req.params;
    const {first_name, last_name, phone_number, email, city} = req.body;
    Customer.update(id, {first_name, last_name, phone_number, email, city}, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.changes === 0) 
            return res.status(404).json({ error: "Customer not found" });
        res.json({ message: "Customer updated" });
    });
};

exports.deleteCustomer = (req, res) => {
    const { id } = req.params;
    Customer.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.changes === 0)
            return res.status(404).json({ error: "Customer not found" });
        res.json({ message: "Customer deleted" });
    });
};