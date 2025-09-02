import React from 'react';
import axios from 'axios';

function AddressList({ addresses, customerId }) {
  const handleDelete = (addressId) => {
    axios.delete(`http://localhost:5000/api/customers/${customerId}/addresses/${addressId}`)
      .then(() => window.location.reload())
      .catch(err => console.error("Error deleting address:", err));
  };

  if (!addresses.length) return <p className="text-gray-600">No addresses found.</p>;

  return (
    <ul className="space-y-3">
      {addresses.map((addr) => (
        <li
          key={addr.id}
          className="border rounded-lg p-4 flex justify-between items-center"
        >
          <span>
            {addr.street}, {addr.city}, {addr.state} - {addr.zip_code}
          </span>
          <button
            onClick={() => handleDelete(addr.id)}
            className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AddressList;
