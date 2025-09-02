import React, { useState } from 'react';
import axios from 'axios';

function AddressForm({ customerId, onSuccess }) {
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    zip_code: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/customers/${customerId}/addresses`, formData)
      .then((res) => {
        onSuccess(res.data);
        setFormData({ street: "", city: "", state: "", zip_code: "" });
      })
      .catch((err) => console.error("Error adding address:", err));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {["street", "city", "state", "zip_code"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.replace("_", " ").toUpperCase()}
          value={formData[field]}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
        />
      ))}
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Save Address
      </button>
    </form>
  );
}

export default AddressForm;
