import React, { useState, useEffect } from 'react';

function CustomerForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    city: "",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.first_name || !formData.last_name || !formData.email) {
      alert("First Name, Last Name, and Email are required!");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white shadow rounded">
      {["first_name", "last_name", "email", "phone", "city"].map((field) => (
        <input
          key={field}
          name={field}
          type={field === "email" ? "email" : "text"}
          placeholder={field.replace("_", " ").toUpperCase()}
          value={formData[field]}
          onChange={handleChange}
          required={["first_name", "last_name", "email"].includes(field)}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}

export default CustomerForm;
