// client/src/components/CustomerList.js
import React from 'react';
import { Link } from 'react-router-dom';

function CustomerList({ customers }) {
  if (!customers.length) {
    return <p className="text-gray-600 text-center mt-4">No customers found.</p>;
  }

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full border-collapse">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">City</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.customer_id} className="border-b hover:bg-gray-50">
              <td className="p-3">{c.first_name} {c.last_name}</td>
              <td className="p-3">{c.email}</td>
              <td className="p-3">{c.city}</td>
              <td className="p-3">
                <Link
                  to={`/customers/${c.customer_id}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
