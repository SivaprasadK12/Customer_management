const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

// Add new address
router.post("/", addressController.addAddress);

// Get all addresses for a customer
router.get("/:customerId", addressController.getAddressByCustomer);

// Update an address
router.put("/:id", addressController.updateAddress);

// Delete an address
router.delete("/:id", addressController.deleteAddress);

module.exports = router;